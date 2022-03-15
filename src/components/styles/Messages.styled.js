import styled from 'styled-components';

export const MessagesContainer = styled.div`
    max-height: 90vh;
    padding: 0 1rem;
    margin-top: 5rem;
    overflow-y: scroll;
    margin-bottom: 5rem;

    ::-webkit-scrollbar {
        background-color: #ccc;
        width: 0.4rem;
        border-radius: 0.3rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #aaa;
        width: 0.4rem;
        border-radius: 0.3rem;
    }
`;