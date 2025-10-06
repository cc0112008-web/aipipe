const res = await fetch(url, { headers: { "Authorization": `Bearer ${process.env.AI_PIPE_TOKEN}`, "Accept": "application/vnd.github.v3+json" } });
const data = await res.ok ? await res.json() : { created_at: `GitHub API error: ${res.status}` };
return data.created_at ?? "Creation date not found";
