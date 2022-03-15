import { useContext } from 'react';
import {StyledLogo} from './styles/Logo.styled';
import { AppContext } from '../App';

const Logo = () => {

	const { username } = useContext(AppContext);

	return ( 
	<StyledLogo>
		<h1>Worldie<span>Chat</span></h1> 
		<p>Welcome, {username}</p>
	</StyledLogo>	)
}

export default Logo