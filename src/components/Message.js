import { useContext } from 'react';
import {StyledMessage} from './styles/Message.styled';
import { AppContext } from '../App';


const Message = ({ message }) => {

	const { username } = useContext(AppContext);


	return (
		<StyledMessage user={message.user === username}>
			{ message.user !== username && <span>{message.user || 'unknown user'}</span> }
			<div>{message.message}</div>
		</StyledMessage>
	)
}

export default Message