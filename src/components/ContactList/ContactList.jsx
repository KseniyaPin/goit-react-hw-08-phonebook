import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from '../redux/selectors';
import { fetchContacts, deleteContact } from '../redux/operations';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import css from '../Form/Form.module.css';
import {getIsLoggedIn} from '../redux/selectors';
import {
  selectError,
  selectIsLoading,
  getIsFetchingCurrent
} from '../redux/selectors';


export const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(getIsLoggedIn);
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
         {isLoggedIn && !error && <b>Loading contacts...</b>}
         <ContactList />
        </section>
      </div>  
        
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
    
    )
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
