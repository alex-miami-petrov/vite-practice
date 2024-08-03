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

export const getContactId = async (id) => {
  try {
    const data = await axios.get(`/contacts/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const postContact = async (body) => {
  try {
    const data = await axios.post(`/contacts/`, body);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};


