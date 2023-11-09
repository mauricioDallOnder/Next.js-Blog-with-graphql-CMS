import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Substitua com suas informações reais do Mailchimp
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY as string;
const mailchimpServerPrefix = process.env.MAILCHIMP_API_SERVER as string // e.g., us6
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID as string // O ID da sua lista de audiência no Mailchimp
const DATACENTER = MAILCHIMP_API_KEY.split('-')[1];
// Função para gerar o cabeçalho de autorização do Mailchimp
const getMailchimpAuthHeader = () => {
  return {
    'Authorization': `Bearer ${DATACENTER}`,
    'Content-Type': 'application/json'
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Supondo que o corpo da solicitação do webhook contém informações do novo post
    const { title, content, imageUrl } = req.body;

    // Aqui você irá processar o webhook e preparar o conteúdo do e-mail
    // Isto é um exemplo e pode variar de acordo com o seu conteúdo real e estrutura do e-mail
    const emailContent = {
      subject: `New Post: ${title}`,
      html: `
        <h1>${title}</h1>
        <img src="${imageUrl}" alt="${title}" />
        <p>${content}</p>
      `,
    };

    try {
      // Aqui você criaria uma nova campanha no Mailchimp com o conteúdo do post
      // Esta é uma chamada de API genérica para criar uma campanha, pode variar com base na sua necessidade específica
      const campaignResponse = await axios.post(`https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/campaigns`, {
        type: 'regular',
        recipients: {
          list_id: AUDIENCE_ID,
        },
        settings: {
          subject_line: emailContent.subject,
          preview_text: content.slice(0, 150), // Um resumo do conteúdo
          title: `Campaign for ${title}`, // Título da campanha
          from_name: 'Chá com sabor', // Seu nome ou o nome da empresa
          reply_to: 'londer11@icloud.com', // Seu endereço de e-mail para respostas
        },
      }, {
        headers: getMailchimpAuthHeader(),
      });

      // Após a campanha ser criada, você precisaria disparar/enviar a campanha
      // Este é o ID da campanha que foi criado na etapa anterior
      const campaignId = campaignResponse.data.id;

      // Disparar a campanha que acabou de ser criada
      await axios.post(`https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/campaigns/${campaignId}/actions/send`, {}, {
        headers: getMailchimpAuthHeader(),
      });

      res.status(200).json({ message: 'Webhook received and email campaign triggered' });
    } catch (error) {
      console.error('Error sending campaign via Mailchimp', error);
      res.status(500).json({ error: 'Error sending campaign via Mailchimp' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
