# Websocket chat server

## Tools

- Node >= 16.x
- NPM >= 8.x (update NPM executing `npm i -g npm`)

## Project Set Up

- clone and `npm install`.
- once packages are installed run `npm run migrate`
- lastly, run `npm run start` which will start both the frontend and backend

## Project Instructions

the project is ran on `localhost:3000` with the api ran on `localhost:4000`. you will have to type in a username in the form given on the frontend before you are connected to the websocket live chat server to communicate with other clients live

## architecture and design

I had designed the project with a modular design reserving each file for its own respective part in the website. App.js contains the header and the text within as well as the 2 different routes for the Main.js and the Chat.js: the Main.js was made to contain the authentication for implementing the user's username for use so that the user can be identified when they sent their message. i had also implemented a check in the username field so that clients would not be able to make a blank username/or a username with only spaces.

## improvements id like to add for production

before the projhect is moved to production id love to add a user is typing feature to the project and make the website look more sleek and well designed to be pleasing to the eyes. I would also like to add a message appear feature where all the other messages would shift upwards and the new message would appear to be more visually appealing.