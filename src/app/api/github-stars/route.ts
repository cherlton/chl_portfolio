export async function GET(req: Request) {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'portfolio-app',
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch('https://api.github.com/repos/cherlton/chl_portfolio', {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return Response.json({ stars: 0 });
  }

  const data = await res.json();
  return Response.json({ stars: data.stargazers_count ?? 0 });
}