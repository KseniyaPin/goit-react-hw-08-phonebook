// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { deleteContact } from '../redux/operations';




export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
   
  const visibleContacts =  contacts.filter(contact => contact.name && contact.name.toLocaleLowerCase().includes(filter.toLowerCase()));

  // Удаления задачи при клике по кнопке удаления, и передаем ей идентификатор
  const handleDelete = evt => dispatch(deleteContact(evt.currentTarget.id));

  return (
    <>
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
    </>
  );
};
