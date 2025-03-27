import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
// import Chat from './components/Chat.js';
import Main from './components/Main.js'
function App() {
  const [username, setUsername] = useState('')
  const ws = new WebSocket("ws://localhost:4000")
  return (
    <div className="App">
      <h1 className="App-header">
        Chatting area
      </h1>
      <Routes>
        <Route path='/' element={<Main updateUser={setUsername}/>}/>
        {/* <Route path='/chat' element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
