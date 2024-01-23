import css from './App.module.css';
import { ContactForm } from './ContactForm';
import { SearchBox } from './SearchBox';
import { ContactList } from './ContactList/ContactList';
import contactList from '../data/contactList.json';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contactList={contactList} />
    </div>
  );
};
