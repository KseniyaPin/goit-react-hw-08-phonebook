import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from '../Form/Form.module.css';



export const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
  return (
    <>
      <div>
         <h1>Phonebook</h1>
         <Form />
         <h2>Contacts</h2>
         <section className={css.sectionStyle}>
         <Filter />
          {isLoadingContacts &&  <b>Завантаження контактів...</b>} 
          </section>
      </div>     
          
      <ContactList />
    </>
  );
};

