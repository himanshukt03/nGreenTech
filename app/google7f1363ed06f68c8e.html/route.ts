export async function GET() {
  return new Response('google-site-verification: google7f1363ed06f68c8e.html', {
    headers: { 'Content-Type': 'text/html' },
  });
}
