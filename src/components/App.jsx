import { useState } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';

import { search } from '../helpers/searchFunction';
import data from '../data/contactList.json';
import css from './App.module.css';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [contactList, setContactList] = useState(data);

  const addContact = newContact => {
    setContactList(currContacts => {
      return [...currContacts, newContact];
    });
  };

  const deleteContact = userId => {
    setContactList(currContacts => {
      return currContacts.filter(contact => contact.id !== userId);
    });
  };

  const searchResult = search(contactList, inputValue);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={inputValue} onChange={setInputValue} />
      <ContactList contactList={searchResult} onDelete={deleteContact} />
    </div>
  );
};
