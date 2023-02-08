import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getSchools = async () => {
  const { data } = await axios.get(`${BASE_URL}/schools`);
  return data;
};
