export const fetchJobs = async () => {
  const response = await fetch('https://api.joinrise.io/api/v1/jobs/public?limit=10');
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  return data.data; // Adjust based on API structure
};