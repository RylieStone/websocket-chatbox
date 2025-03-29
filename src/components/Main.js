import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css"
function Main(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [err, setErr] = useState(""); // Track error messages

    const onSubmit = (e) => {
        e.preventDefault();
        
        const trimmedUsername = username.trim();
        if (trimmedUsername.length > 0) {
            props.updateUser(trimmedUsername); // Ensure correct function name
            navigate("/chat");
        } else {
            setErr("Username must contain valid characters"); // Update error state
        }
    };

    return (
        <div className="form">
            <h2>Select a username</h2>
            {err && <p id="message">{err}</p>}
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        name="username" 
                        onChange={(e) => {
                            setUsername(e.target.value)
                            setErr('')
                        }} 
                        value={username} 
                        placeholder="Type your Username"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Main;