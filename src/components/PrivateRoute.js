// import { useSelector } from "react-redux";
// import {Routes, Route, Navigate} from "react-router-dom";
// import {getIsLoggedIn} from './redux/selectors';

// export default function PrivateRoute({
// 	children, 
// 	redirectTo = '/', 
// 	...routeProps
// }) {
// 	const isLoggedIn = useSelector(getIsLoggedIn);
// 	return 	(
// 	<Routes>
// 	  <Route {...routeProps}>
// 		{isLoggedIn ? children: <Navigate to='/login' />}
// 	  </Route>
// 	</Routes>
// 	)
// }


