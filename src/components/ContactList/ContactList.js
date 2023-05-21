import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilterValue,
} from 'components/store/Contacts/selectors';
import { deleteContacts } from 'components/store/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const visibleContacts = getVisibleContacts();

  console.log(contacts);
  return (
    <ul className={css.contactlist}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.contactElement} key={contact.id}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button
              className={css.button}
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
