import { getAllContacts } from './js/api';

const asyncAllContacts = async () => {
  try {
    const awaitAllContacts = await getAllContacts();
    console.log(awaitAllContacts);
  } catch (err) {
    console.log(err);
  }
};

asyncAllContacts();
