export const fetchRepos = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) throw new Error(`Failed to fetch GitHub repos`);

  const data = await res.json();
  return data;
};
