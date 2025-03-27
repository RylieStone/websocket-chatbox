import React, {useState} from 'react'
import "./chat.css"
function chat(props) {

    return (
        <div>
            <div className="chat">

            </div>
            <form>
                <input type="text" placeholder="Message goes here"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}