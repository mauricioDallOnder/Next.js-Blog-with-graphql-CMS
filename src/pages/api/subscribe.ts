import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY as string;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID as string
    const DATACENTER = MAILCHIMP_API_KEY.split('-')[1];


    try {
      const response = await axios.post(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
        email_address: email,
        status: 'subscribed',
        
      }, {
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        },
      });

      res.status(200).json({ id: response.data.id });
    } catch (error) {
      console.error('Error adding contact to Mailchimp', error);
      res.status(500).json({ error: 'Error adding contact to Mailchimp' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
