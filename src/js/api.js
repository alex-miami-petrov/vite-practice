import axios from 'axios';

axios.defaults.baseURL = 'https://64859281a795d24810b7146a.mockapi.io/work';

export const getAllContacts = async () => {
  try {
    const data = await axios.get('/contacts');
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
