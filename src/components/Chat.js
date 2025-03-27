import React, {useState} from 'react'
import "./chat.css"
const fakeMessages = [
    {id: 1, username: 'faker', message: "why hello there"},
    {id: 2, username: 'brooo', message: "what are you doing"},
    {id: 3, username: 'faker', message: "why hello there"},
    {id: 4, username: 'brooo', message: "what are you doing"},
]
function chat(props) {
    const onSubmit = e => {
        e.preventDefault()
        let message = props.message
        console.log(message)
        if (props.message.trim !== '') {
            props.setMessage(message)
            props.submitMessage()
        }
    }
    return (
        <div>
            <div className="chat">
                {fakeMessages.map((message) => {
                    return (<div className='message' key={message.id}>
                        <h3 className='username'>{message.username}</h3>
                        <p className='message'>{message.message}</p>
                    </div>)
                })}
            </div>
            <form className='chatWindow' onSubmit={e => onSubmit(e)}>
                <input type="text" className='textBox'
                name="message" 
                onChange={(e) => props.setMessage(e.target.value)} 
                value={props.message} 
                placeholder="type your message here"
                />
                <button className='send' type="submit">Send</button>
            </form>
        </div>
    )
}
export default chat