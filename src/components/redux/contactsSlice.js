import { createSlice } from '@reduxjs/toolkit';
// Импортируем операции
import { fetchContacts, addContact, deleteContact } from './operations';

// Слайс списка задач, для хранения массива Контактов, флаг статуса загрузки и данные возможной ошибки.
const initState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const handleRejected = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  //   Свойство extraReducers используется чтобы объявить редюсеры для «внешних» типов экшенов, то есть тех которые не сгенерированы из свойства reducers
  extraReducers: {
    // Выполнится в момент старта HTTP-запроса
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    // Выполнится если HTTP-запрос завершился с ошибкой
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    // Выполнится если HTTP-запрос завершился успешно
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...action.payload];
    },
    // Добавление контакта
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
          },
    // Обработка экшенов удаления Контакта
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [
        ...state.items.filter(contact => contact.id !== action.payload),
      ];
    },
  },
});

// Экспортируем редюсер
export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
