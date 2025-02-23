export async function POST(req) {
    try {
        const { email } = await req.json();
        
        // Here you would typically integrate with your email service
        // For example, with Mailchimp, ConvertKit, etc.
        
        // For now, we'll just return success
        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
} 