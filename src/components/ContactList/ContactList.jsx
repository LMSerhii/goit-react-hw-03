import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contactList }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};
