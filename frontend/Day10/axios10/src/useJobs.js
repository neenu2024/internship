// src/hooks/useJobs.js
export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect + fetch logic here
  return { jobs, loading };
}