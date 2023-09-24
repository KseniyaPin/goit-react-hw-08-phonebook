// чтобы при отправке экшена выполнить асинхронный код, необходимо объявить «операцию» - асинхронный генератор экшена, в теле которого вызываются другие, синхронные генераторы экшенов.
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`; //Bearer - носитель
    },
    unset() {
      axios.defaults.headers.common.Authorization = ''; //common - на все запросы ставит  заголовок Авторизации
    }
}

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {try {
  const {data} = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
} catch (error) {}
});

// После успешного логаута, удаляем токен из HTTP-заголовка
export const logOut = createAsyncThunk('auth/logout', 
async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
          }
  },
);



// Authorization: 'Bearer токен'


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
