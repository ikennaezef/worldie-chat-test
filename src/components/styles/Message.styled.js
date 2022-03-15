import styled from 'styled-components';

export const StyledMessage = styled.div`

	width: fit-content;
	max-width: 75vw;
	margin-bottom: 0.3rem;	
	margin-left: ${({user}) => user ? 'auto' : 'none'};
	display: flex;
	flex-direction: column;
	animation: slide 0.5s forwards;

	span {
		margin-bottom: 0.1rem;
		font-size: 0.8rem;
		margin-left: ${({user}) => user ? 'auto' : 'none'};
		color: #aaa;
	}

	div {
		padding: 0.5rem;
		background-color: ${({ user, theme }) => user ? theme.default.accent : '#fff'};
		color: ${({ user, theme }) => user ? '#fff' : theme.default.text};
		border-radius: 0.6rem;
		font-size: 1rem;
	}


	@media(max-width: 450px)  {
		
		div {
			font-size: 0.8rem;
		}
	}


	@keyframes slide {
		from {
			transform: scale(0.6);
			opacity: 0.7;
		}

		to {
			transform: scale(1);
			opacity: 1;
		}
	}
`;