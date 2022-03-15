import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({theme}) => theme.colors.footer};
	color: #fff;
	padding: 5rem 1rem 3rem;

	button {
		cursor: pointer;
		background-color: transparent;
		outline: none;
		border: none;
		font-family: inherit;
	}

	@media(max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	width: 11.5rem;
	margin-bottom: 1.5rem;
`

export const FooterLinks = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 2rem;
	

	ul li {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: flex-start;
		text-align: left;
	}

	& li > p {
		font-size: 0.9rem;
	}

	img {
		width: 1rem;
		margin-right: 1rem;
	}

	button {
		color: inherit;
	}

	button:hover {
		text-decoration: underline;
	}

	& > ul {
		flex: 1;
	}

	& + p {
		text-align: right;
		font-family: 'Poppins', sans-serif;
		font-size: 0.8rem;
	}


	@media(max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		align-items: flex-start;

		& + p {
			text-align: center;
		}
	}
`;

export const Socials = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;

	button {
		color: #fff;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
		border: 0.1rem solid #fff;
		border-radius: 50%;
		width: 2.2rem;
		height: 2.2rem;
		font-size: 1.1rem;
		transition: 0.3s ease;
	}

	button:hover {
		color: ${({theme}) => theme.colors.accent};
		border-color: ${({theme}) => theme.colors.accent};
	}


	@media(max-width: ${({ theme }) => theme.mobile}) {
		align-self: center;
	}

`;