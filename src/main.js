import { getAllContacts, getContactId } from './js/api';

const asyncAllContacts = async () => {
  try {
    const awaitAllContacts = await getAllContacts();
    console.log(awaitAllContacts);
  } catch (err) {
    console.log(err);
  }
};

asyncAllContacts();

const asyncContactId = async () => {
  try {
    const awaitContactId = await getContactId(23);
    console.log(awaitContactId);
  } catch (err) {
    console.log(err);
  }
};

asyncContactId();
