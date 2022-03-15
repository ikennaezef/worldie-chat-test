import { useState, useContext } from 'react'
import { AppContext } from '../App'
import {StyledForm} from './styles/InputForm.styled';
import db from '../firebase';
import firebase from 'firebase';

const InputForm = () => {

	const { username } = useContext(AppContext);
	const [message, setMessage] = useState('');

	const sendMessage = (e) => {
		e.preventDefault();
		// setMessages([...messages, {
		// 	user: username,
		// 	message: message
		// }]);

		db.collection('messages').add({
			user: username,
			message: message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setMessage('');
	}


	return (
		<StyledForm>
			<input type="text" placeholder='Enter message...' value={message} onChange={(e) => setMessage(e.target.value)} />
			<button type='submit' disabled={!message} onClick={ sendMessage } >Send</button>
		</StyledForm>
	)
}

export default InputForm