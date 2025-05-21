import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { to, subject, text } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Name <your@email.com>',
      to,
      subject,
      text,
    });

    res.status(200).json({ success: true, id: response.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
