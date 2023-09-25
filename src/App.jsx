import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/App.bar';
import {getIsLoggedIn } from './components/redux/selectors';

import HomeView from './components/views/HomeView';
import RegisterView from './components/views/RegisterView';
import LoginView from './components/views/LoginView';
import {ContactsView} from './components/views/ContactsView';
import { fetchCurrentUser} from './components/redux/operations';

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(getIsLoggedIn);
 
  return (
    <>
    {/* {!isFetchingCurrentUser &&  ( */}
      <div>
        <AppBar />
        <Routes>
          <Route path='/' element={ isLoggedIn ? <Navigate to='/' /> : <HomeView /> } />
          <Route path='/register' element={ isLoggedIn ? <Navigate to='/contacts' /> : <RegisterView /> } />
          <Route path='/login' element={ isLoggedIn ? <Navigate to='/contacts' /> : <LoginView /> } />
          <Route path='/contacts' element={ isLoggedIn ? <Navigate to='/login' /> : <ContactsView /> } />
          <Route path='*' element={ isLoggedIn ? <Navigate to='/contacts' /> : <Navigate to='/login' /> } />
        </Routes>
       </div>
       {/* )}; */}
    </>
 ) 
    
}