import styled from 'styled-components';

export const StyledLogo = styled.div`
	
	text-align: center;
	margin: 0 auto 1.5rem;
	padding: 1rem 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
	background-color: ${({theme}) => theme.default.body};

	h1 {
		font-size: 1.5rem;
		color: ${({theme}) => theme.default.text};
		margin-bottom: 0.5rem;

		span {
			color: ${({theme}) => theme.default.accent};
		}
	}

	p {
		font-size: 0.9rem;
	}


	@media(max-width: 450px) {
		
		padding: 0.4rem 0;
	}

`;