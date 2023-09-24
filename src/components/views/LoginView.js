import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/operations';

export default function LoginView() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleChange = ({target: {name, value}}) => {
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
					return setPassword(value);
			default: return;
		}
	}
	
	const handleSubmit = evt => {
		evt.preventDefault();
		// При отправке формы кидаем этот объект
		dispatch(logIn({email, password}));
		setEmail('');
		setPassword('');
	}
	
	return (
		<div>
			<h1>Строрінка логінізації</h1>
			<form onSubmit={handleSubmit} 
			autoComplete="off">
				<label>
					E-mail
					<input type='email' name="email" value={email} onChange={handleChange} />
				</label>
				
				<label>
					Password
					<input type='password' name="password" value={password} onChange={handleChange} />
				</label>
				<button type='submit'>Увійти</button>
				</form>
		</div>
	)
}
