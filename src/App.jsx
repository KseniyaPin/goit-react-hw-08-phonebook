// import { useEffect, lazy } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/App.bar';
import {getIsLoggedIn} from './components/redux/selectors';

import HomeView from './components/views/HomeView';
import RegisterView from './components/views/RegisterView';
import LoginView from './components/views/LoginView';
import {ContactList} from './components/ContactList/ContactList.jsx';




// import { fetchCurrentUser} from './components/redux/operations';
// import {
//   selectError,
//   selectIsLoading,
//   getIsFetchingCurrent
// } from './components/redux/selectors';



// import { ContactList } from './components/ContactList/ContactList';
// import { Form } from './components/Form/Form';
// import { Filter } from './components/Filter/Filter';
// import css from './components/Form/Form.module.css';

// const HomeView = lazy(() => import('./components/views/HomeView'));
// const RegisterView = lazy(() => import('./components/views/RegisterView'));
// const LoginView = lazy(() => import('./components/views/LoginView'));
// const ContactsView = lazy(() => ('./components/ContactList/ContactList.jsx'));


export default function App() {
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(
  //   getIsFetchingCurrent,
  //   );
    
  // useEffect(() => {
  //     dispatch(fetchCurrentUser());
  // }, [dispatch]);
    
  // const error = useSelector(selectError);
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const restricted = false;

  return (
    // !isFetchingCurrentUser &&  (
    //   <div>
    //     <h1>Phonebook</h1>
    //     <Form />
    //     <h2>Contacts</h2>
    //     <section className={css.sectionStyle}>
    //       <Filter />
    //       {isLoggedIn && !error && <b>Loading contacts...</b>}
    //       <ContactList />
    //     </section>
    
<>
      <AppBar />
      {/* <>
      <PublicRoute  path='/' element={<HomeView />} />
      <PublicRoute  path='/register' element={<RegisterView />} />
      <PublicRoute  path='/login' redirectTo='/contacts' element={<RegisterView />} />
      <PrivateRoute path='/contacts' redirectTo='/login' element={<ContactList />} /> 
      </> */}

        <Routes>
          <Route path='/' element={ isLoggedIn ? <Navigate to='/' /> : <HomeView /> } />
          <Route path='/register' element={ isLoggedIn ? <Navigate to='/contacts' /> : <RegisterView /> } />
          <Route path='/login' element={ isLoggedIn ? <Navigate to='/contacts' /> : <LoginView /> } />
          <Route path='/contacts' element={ isLoggedIn ? <Navigate to='/login' /> : <ContactList /> } />
          <Route path='*' element={ isLoggedIn ? <Navigate to='/contacts' /> : <Navigate to='/login' /> } />
        </Routes>
</>

      //  </div>
    //  ) 
    
  );
}