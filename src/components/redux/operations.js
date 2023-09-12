// чтобы при отправке экшена выполнить асинхронный код, необходимо объявить «операцию» - асинхронный генератор экшена, в теле которого вызываются другие, синхронные генераторы экшенов.
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64fadba1cb9c00518f7a49af.mockapi.io/api/hw7/';

//  createAsyncThunk() - первым аргументом она принимает тип экшена, а вторым функцию которая должна выполнить HTTP-запрос и вернуть промис с данными, которые станут значением payload. Она возвращает асинхронный генератор экшена (операцию), при запуске которого выполнится функция с кодом запроса.

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (evt) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.post('/contacts', contactId);
      return contactId;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
//  Операция удаления, которая ожидает только идентификатор удаляемой задачи.
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
