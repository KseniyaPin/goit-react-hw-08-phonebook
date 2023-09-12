import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'components/redux/operations';
import {selectContacts} from '../redux/selectors'
import css from './Form.module.css';

export const Form = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // Запуск операции добавления Контакта при сабмите формы
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.target;
    const nameInput = name.value.trim();
    const numberInput = number.value.trim();

    //Якщо обидва Інпути заповнені
    if (!nameInput || !numberInput) {
      return;
    }

    if (nameInput !== '') {
      // Пошук елемента по унікальному значенню name в масиві сontacts
      if (
        contacts.find(option =>
          option.name
            ? option.name.toLowerCase() === nameInput.toLowerCase()
            : ''
        )
      ) {
        alert(`${nameInput} is already in contacts.`);
        name.value = '';
        number.value = '';
        return;
      }
    }

    // Отправляем результат - экшен создания задачи
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    
    dispatch(
      addContact({
        name: nameInput,
        number: numberInput,
        id: nanoid(),
      })
    );
    name.value = '';
    number.value = '';

    // form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters. For example Adrian de Castelmore"
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
