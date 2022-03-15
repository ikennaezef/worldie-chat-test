import { useState, useEffect, createContext, useRef } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import {Container} from './components/styles/Container.styled';
import {MessagesContainer} from './components/styles/Messages.styled';
import theme from './theme';
import Logo from './components/Logo';
import Message from './components/Message';
import InputForm from './components/InputForm';
import db from './firebase';


export const AppContext = createContext(null);


function App() {

  const [username, setUsername] = useState('');

  const [messages, setMessages] = useState([  ]);

  const messagesRef = useRef(null);


  useEffect(() => {
    setUsername(prompt('What is your name?'));
  }, [ ]);

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setMessages(snapshot.docs.map(doc => doc.data()));
    })
  }, [ ])


  // For scrolling to the bottom of the messages when a message is sent
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    // return messagesRef;

    return(messagesRef);
  }, [messages])




  return (
    <AppContext.Provider value={ {username, setUsername, messages, setMessages} }>
      <ThemeProvider theme= { theme } >
        <GlobalStyles />     
          <Logo />
          <Container>
            <MessagesContainer ref={ messagesRef } >
              { messages.map(item => <Message key={item.message} message={item} />) }
            </MessagesContainer>
            <InputForm />
          </Container>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
