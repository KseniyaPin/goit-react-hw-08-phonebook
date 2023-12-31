import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { register} from '../redux/operations';

export default function RegisterView() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleChange = ({target: {name, value}}) => {
		switch (name) {
			case 'name':
				return setName(value);
			case 'email':
				return setEmail(value);
			case 'password':
					return setPassword(value);
			default: return;
		}
	}
	
	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(register({name, email, password}));
		setName('');
		setEmail('');
		setPassword('');
	}
	
	return (
		<div>
			<h1>Строрінка реєстрації</h1>
			<form onSubmit={handleSubmit} autoComplete="off">
				<label>
					Name
					<input type='text' name='name' 
					value={name} onChange={handleChange}></input>
				</label>
				<label>
					E-mail
					<input type='email' name="email" value={email} onChange={handleChange}></input>
				</label>

				<label>
					Password
					<input type='password' name="password" value={password} onChange={handleChange} />
				</label>
				<button type='submit'>Sind Up</button>
				</form>
		</div>
	)
}
