import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		transition: 0.3s ease;
	}

	body {
		background-color: ${({theme}) => theme.default.body};
		font-family: 'Montserrat', sans-serif;
		color: ${({theme}) => theme.default.text};
	}

	html {
		scroll-behaviour: smooth;
	}



	/*@media(min-width: ${({ theme }) => theme.large}) {
		html {
			font-size: 20px;
		}
	}*/
`;

