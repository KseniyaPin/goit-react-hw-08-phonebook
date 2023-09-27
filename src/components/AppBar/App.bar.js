import {useSelector} from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
// import {getIsLoggedIn} from '../redux/selectors';
import { getUser } from './components/redux/selectors';

const styles = {
	header: {
	  display: 'flex',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  borderBottom: '1px solid #2A363B',
	},
  };

export default function AppBar() {
	// const isLoggedIn = useSelector(getIsLoggedIn);
	const { user } = useSelector(getUser);
	
	return (
		<header style={styles.header}>
			<Navigation/>
			{user?.token ? <UserMenu /> : <AuthNav />}	
		</header>
	)
}
