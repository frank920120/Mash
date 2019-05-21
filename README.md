# Mash

This is a full stack group project at RED Academy App Developer Program. It is a website for connecting local musicians in order to collaborate on music creations and gigs. The server runs in Meteor, which is based on NodeJS. The database used is MongoDB. On the front-end, it leverages React as the rendering tool. For the interface elements we use Material UI.

## Site Demo

![Site Demo](/public/images/site-demo.gif)

## Back-End Functionalities

- Get Profiles: User can visit profile page by providing a user id String.
- Send Message: The message include "from name", "from id", "to id", "text" information. When sending the message, the message will push to the user's message box. And a messageBox button will show up on the menu bar. The new message also has an alert to tell the user to read the new message.
- Connection: Each user has a "friends" list to add friends. When click the connect button on someone's profile page, it will send a message to the target user and waiting for his acceptance. When the user accepts,the following events will happen. Send back a message with an email address for future connection -> add a userId to the friend list in both users' profile -> Alert the two users about they have a new friend.
- Filter users: Whenever the filter make changes on the front-end, the filter information will be updated to the user's profile. Before loading the directory page, the filter menu will automatically loading the filter information in the profile, which means when the user refreshes the page, the filter information cannot be discarded by accident. The directory page can automatically filter the artists' information according to the filter input, and update the content on the page.

---

## About the Authors

Naiji Zhang is a gifted Computer Scientist, with a MS in Information, Network & Computer Security. He is proficient in full-stack web technologies and in this project focused mainly on the back end.

Frank Fang is a talented , with a BCIT Technical Web Design Certificate. He is a master of CSS and creative styling and in this project focused mainly on the front end.

Nancy Chu holds a BS in Mechanical Engineering from BCIT and is an experienced designer in the robotics industry. She takes the credit for the design of the project, plus many lines of code.

Andre Moura an experienced Product Manager working in the Tech Industry. He was the project manager, focusing on the value proposition, quality and delivery.

## Main Takeaways

In this project, we learned how Meteor can be a powerful tool for creating modern websites with less effort. Here are some of the main takeaways:

- Meteor provides the environment both for the server and the client. One of its main features is the shared code between server and client. It also eliminates the need to manage context and states in React applications.
- Meteor implements MongoDB in the back end with a synchronised database on the client using Minimongo. This allows for instant CRUDs on the client side, since it happens locally first and then synchs with the server.
- MongoDB is a flexible database, using non-SQL and non-relational collections. This can be especially useful when the data to be colleted is not yet totally defined. You can insert new data fields to the database with ease.
- For the above reasons, Meteor is a good option as a tool for prototyping or in Hackathons.

---

## Technologies Used

- Meteor
- React
- Material-UI
- Final Form
- Google Maps React

## Instructions for Running

### Installation of required modules

```bash
meteor npm install
```

### Run

```bash
meteor
```
