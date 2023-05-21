import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactProcess: state => {
      state.isLoading = true;
    },
    addContactSuccess: {
      reducer: (state, action) => {
        state.isLoading = false;
        state.error = null;

        const checkNameContacts = state.contacts.find(
          contact => contact.name === action.payload.name
        );
        if (checkNameContacts) {
          console.log(
            'Контакт с таким именем уже существует:',
            checkNameContacts
          );
          return;
        }
        state.contacts.push(action.payload);
      },
      prepare: payload => ({ payload }),
    },
    addContactRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteContacts: {
      reducer: (state, action) => {
        state.contacts = state.contacts.filter(el => el.id !== action.payload);
      },
    },
    prepare: payload => ({ payload }),
  },
});

export const {
  addContactProcess,
  addContactSuccess,
  addContactRejected,
  deleteContacts,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
