try {
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${process.env.AI_PIPE_TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    }
  });
  if (!response.ok) return `GitHub API error: ${response.status}`;
  const data = await response.json();
  return data.created_at ?? "Creation date not found";
} catch (err) {
  return `Error: ${err.message}`;
}
