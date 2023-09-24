import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from '../avatar-default-icon.png';
import { getUserName } from '../redux/selectors';
import { logOut } from "../redux/operations";


const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		},
		avatar: {
			marginRight: 4,
		},
		name: {
			fontWeight: 700,
			marginRight: 12,
		}
}

export default function UserMenu() {
	const dispatch = useDispatch();
	const name = useSelector(getUserName);
	const avatar = defaultAvatar;
	
	return (
		<div style={styles.container}>
			<img src={avatar} alt='' width='32' style={styles.avatar} />
			<span style={styles.name}>Hallo, {name}</span>
			<button type="button" onClick={() => dispatch(logOut())}>Вийти</button>
		</div>
	)
}