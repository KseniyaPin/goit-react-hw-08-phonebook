import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/App.bar';
import { getUser } from './components/redux/selectors';

import HomeView from './components/views/HomeView';
import RegisterView from './components/views/RegisterView';
import LoginView from './components/views/LoginView';
import {ContactsView} from './components/views/ContactsView';

export default function App() {
  const { user } = useSelector(getUser);
 
  return (
      <div>
        <AppBar />
        <Routes>

        <Route path="/login" element={user?.token ? <Navigate to="/contacts" /> : <LoginView />} />
          <Route path="/register" element={user?.token ? <Navigate to="/contacts" /> : <RegisterView />} />
          <Route path="/contacts" element={!user?.token ? <Navigate to="/login" /> : <ContactsView />} />
          <Route path="*" element={ user?.token ? ( <Navigate to="/contacts" />  ) : ( <Navigate to="/login" /> )} />

{/*           
          <Route path='/' element={ <LoginView /> } />
          <Route path='/login' element={ user?.token ? <Navigate to='/contacts' /> : <HomeView /> } />
          <Route path='/register' element={ user?.token ? <Navigate to='/contacts' /> : <RegisterView /> } />
          <Route path='/contacts' element={ user?.token ? <ContactsView />  : <Navigate to='/login' /> } />
          <Route path='*' element={ user?.token ? <Navigate to='/contacts' /> : <Navigate to='/login' /> } /> */}
        </Routes>
       </div>
 ) 
    
}

// <Route path="/" element={<Layout />}>
// <Route index element={<HomePage />} />
// <Route
//   path="/register"
//   element={
//     <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//   }
// />