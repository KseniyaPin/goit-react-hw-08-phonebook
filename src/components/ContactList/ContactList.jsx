import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from '../redux/selectors';
import { fetchContacts, deleteContact } from '../redux/operations';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import css from '../Form/Form.module.css';

import { fetchCurrentUser} from '../redux/operations';


export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCurrentUser());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
  const visibleContacts =  contacts.filter(contact => contact.name && contact.name.toLocaleLowerCase().includes(filter.toLowerCase()));

  // Удаления задачи при клике по кнопке удаления, и передаем ей идентификатор
  const handleDelete = evt => dispatch(deleteContact(evt.currentTarget.id));

  return (
    <>
    
    !isFetchingCurrentUser &&  (
      <div>
         <h1>Phonebook</h1>
         <Form />
         <h2>Contacts</h2>
         <section className={css.sectionStyle}>
         <Filter />
        <ul>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li key={id} id={id} onClick={handleDelete}>
              {name}: {number}
              <button type="button">Delete</button>
            </li>
          );
        })}
         </ul>
         {/* {isLoggedIn && !error && <b>Loading contacts...</b>} */}
         {/* <ContactList /> */}
        </section>
      </div>     
    )
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
