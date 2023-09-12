import { useSelector } from 'react-redux';
import {
  // selectContacts,
  selectError,
  selectIsLoading,
} from './redux/selectors';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Form/Form.module.css';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Рендерим разметку в зависимости от значений в состоянии
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <section className={css.sectionStyle}>
        <Filter />
        {isLoading && !error && <b>Loading contacts...</b>}
        <ContactList />
      </section>
    </div>
  );
}
