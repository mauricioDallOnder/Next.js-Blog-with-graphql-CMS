import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY as string;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID as string
    const DATACENTER = MAILCHIMP_API_KEY.split('-')[1];

    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest("hex");

    try {
      const response = await axios.patch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`, {
        status: 'unsubscribed',
      }, {
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        },
      });

      res.status(200).json({ status: response.data.status });
    } catch (error) {
      console.error('Error unsubscribing contact from Mailchimp', error);
      res.status(500).json({ error: 'Error unsubscribing contact from Mailchimp' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
