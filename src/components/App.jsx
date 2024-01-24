import { useState } from 'react';

import { ContactForm } from './ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';

import { search } from '../helpers/searchFunction';
import contactList from '../data/contactList.json';
import css from './App.module.css';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => setInputValue(evt.target.value);

  const searchResult = search(contactList, inputValue);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList contactList={inputValue ? searchResult : contactList} />
    </div>
  );
};
