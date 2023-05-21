import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { deleteContacts } from './store/contactsSlice';

function App() {
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const id = nanoid();
    dispatch(deleteContacts({ id, name, number }));
  };
  return (
    <div style={{ marginLeft: '50px' }}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
