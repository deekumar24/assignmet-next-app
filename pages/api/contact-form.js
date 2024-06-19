export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body

        try {
            const response = await fetch(`${process.env.API_BASE_URL}deepak/v1/contact-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            const data = await response.json();


            if (response.ok) {
                res.status(200).json({ message: 'Form submitted successfully.' });
            } else {
                res.status(response.status).json({ message: data.message || 'Something went wrong.' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}