import { getAllContacts, getContactId, postContact } from './js/api';

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

/* const createContact = async () => {
  try {
    const newContact = await postContact(
      {
        name: "Hanna",
        phone: "096586399"
      }
    );
    console.log(newContact);
  } catch (err) {
    console.log(err);
  }
};

createContact(); */

const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", handleSubmit)

function handleSubmit (e) {
  e.preventDefault();
  console.dir(e.currentTarget.elements.name.value)
  const data = {
    name: e.currentTarget.elements.name.value,
    phone: e.currentTarget.elements.phone.value
  }
postContact(data);
}



