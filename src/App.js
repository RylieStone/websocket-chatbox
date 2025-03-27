import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './components/Chat.js';
import Main from './components/Main.js'
function App() {
  function submitMessage() {
    ws.send(JSON.stringify({username, message}))
    setMessage('')
  }

  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [ws, setWs] = useState(null)
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000')

    socket.addEventListener('open', () => console.log('connected to server'))
    socket.addEventListener('close', () => console.log('Disconnected from server'))
    socket.addEventListener('message', (event) => console.log('message recieved from server ', event.data))

    setWs(socket)

    return () => {
      if (socket) {
        socket.close()
      }
    }
  }, [])


  return (
    <div className="App">
      <h1 className="App-header">
        Chatting area
      </h1>
      <Routes>
        <Route path='/' element={<Main updateUser={setUsername}/>}/>
        <Route path='/chat' element={<Chat message={message} setMessage={setMessage} submitMessage={submitMessage}/>}/>
      </Routes>
    </div>
  );
}

export default App;
