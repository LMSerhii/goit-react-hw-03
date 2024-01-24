import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

const initialValues = { name: '', number: '' };

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSaubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(3),
    });
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSaubmit}>
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" />
        </div>

        <div>
          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field className={css.input} type="tel" name="number" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
