import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	width: 100%;
	position: fixed;
	bottom: 0.1rem;
	left: 0.1rem;
	right: 0.1rem;
	background-color: #fff;
	padding: 0.5rem 1rem;


	input {
		width: 100%;
		border: none;
		outline: none;
		border-bottom: 0.1rem solid ${({theme}) => theme.default.accent};
		margin-right: 0.2rem;
		font-family: inherit;
	}

	button {
		padding: 0.5rem 1rem;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		background-color: ${({theme}) => theme.default.accent};
		color: #fff;
		font-family: inherit;
		cursor: pointer;
	}

	button:disabled {
		background-color: #bbb;
		color: #000;
	}
`;