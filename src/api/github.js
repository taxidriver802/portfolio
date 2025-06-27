export const fetchRepos = async (username) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch Github repos`);
  const data = await res.json();
  return data;
};
