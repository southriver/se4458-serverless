export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const event = req.headers['x-github-event'];
  const payload = req.body;

  console.log('GitHub event:', event);
  console.log('Payload:', payload);

  if (event === 'push') {
    console.log(`Repo pushed: ${payload.repository.full_name}`);
    console.log(`Pusher: ${payload.pusher.name}`);
  }

  return res.status(200).json({ received: true });
}

// Enable raw JSON body
export const config = {
  api: {
    bodyParser: true
  }
};
