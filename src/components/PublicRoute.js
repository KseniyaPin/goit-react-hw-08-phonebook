// import { useSelector } from "react-redux";
// import {Route, Routes, Navigate} from 'react-router-dom';
// import {getIsLoggedIn} from './redux/selectors';

// export default function PublicRoute({
// 	children,
// 	restricted = false, 
// 	redirectTo = '/',
// 	...routeProps
// }) {
// 	const isLoggedIn = useSelector(getIsLoggedIn);
// 	const shouldNavigate = isLoggedIn && restricted;

// 	return (
// 		<Routes>
// 			<Route {...routeProps}>
// 		 	{ shouldNavigate ? <Navigate to='/' /> : children }
// 			</Route>
// 		</Routes>

// 	)}