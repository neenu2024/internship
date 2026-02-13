
import axios from 'axios';
export const fetchJobs = async () => {
  const res = await axios.get('https://www.arbeitnow.com/api/job-board-api');
  return res.data.data;
};