import axios from 'axios';

const baseUrl = '/api/data';

const getData = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

const filterData = async (startTime, frequency) => {
  try {
    const params = { startTime, frequency };
    const response = await axios.get(`${baseUrl}/filter`, { params });
    return response.data;
  } catch (error) {
    console.error('Error filtering data:', error);
    throw error; 
  }
};

export default { getData, filterData };