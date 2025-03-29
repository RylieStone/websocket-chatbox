# Websocket Chat Server
 
## Tools
 
- Node.js (version 16.x or higher)
- NPM (version 8.x or higher; update NPM by executing `npm i -g npm`)
 
## Project Setup
 
1. Clone the repository and run `npm install` to install all necessary packages.
2. Once the installation is complete, execute `npm run migrate` to apply the migrations.
3. Finally, run `npm run start` to launch both the frontend and backend of the application.
 
## Project Instructions
 
The application operates on `localhost:3000`, while the API runs on `localhost:4000`. Before you connect to the websocket live chat server and engage with other clients, simply enter your username in the form on the front end.
 
## Architecture and Design
 
This project features a robust modular design, where each file serves a specific purpose. `App.js` encompasses the header, text content, and the two distinct routes for `Main.js` and `Chat.js`. `Main.js` is responsible for user authentication, allowing users to input their usernames for identification when sending messages. I have implemented a validation check in the username field to prevent users from submitting blank usernames or those containing only spaces. Once a username is successfully submitted, I leverage `useNavigate` to direct the user to the chat room, where they can send and receive messages in real-time. Connections and disconnections from the server are managed in real-time and logged in the console.
 
On the API side, the architecture consists of two main components: the model and the server itself. The server efficiently handles all API interactions, managing user connections, disconnections, and message transmissions. Upon connection, the server dispatches an array of messages to the client, which are seamlessly displayed in the chat box. The server collaborates with the model, which accesses and utilizes data from the database. The message function succinctly adds messages to the database using parameters for the username and message content, while the history retrieves and returns data from the database, ensuring the client always has the latest information. The database employs a unique ID key, automatically generating the next number with each new entry.
 
These design principles create a seamless user experience and ensure that information is broadcasted in real-time to all connected clients.
 
## Improvements I Will Implement for Production
 
Before we take this project to production, I am committed to adding a "user is typing" feature and enhancing the website's visual design to elevate its aesthetic appeal. Additionally, I will introduce a message appearance feature, where existing messages will shift upwards, allowing new messages to display in a more visually engaging manner. This will significantly enhance the overall user experience.