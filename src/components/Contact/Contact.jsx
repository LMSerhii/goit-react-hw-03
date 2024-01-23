import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>
          <FaUserAlt className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
};
