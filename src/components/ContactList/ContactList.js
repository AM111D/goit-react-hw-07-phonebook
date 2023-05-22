import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../store/Contacts/selectors';
import { deleteContact } from 'components/store/Contacts/operation';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const filters = useSelector(getFilterValue);
  console.log(filters);

  const getVisibleContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  console.log(contacts);
  return (
    <ul className={css.contactlist}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.contactElement} key={contact.id}>
            <p>{contact.name}:</p>
            <p>{contact.phone}</p>
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
