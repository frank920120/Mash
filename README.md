# Mash

This is a full stack group project at RED Academy App Developer Program. It is a website for connecting local musicians in order to collaborate on music creations and gigs. The server runs in Meteor, which is based on NodeJS. The database used is MongoDB. On the front-end, it leverages React as the rendering tool. For the interface elements we use Material UI.

## Site Demo

![Site Demo](/public/images/site-demo.gif)

## About the Author

I am an experienced Product Manager working in the Tech Industry. I participated in the initiation and launch of 4 startups. I am currently sharpening my skills by learning about the latest Web Technologies at RED Academy - Vancouver.

## Main Takeaways

In this project, I learned modern techonologies for integrating the back-end. Here are some of the main takeaways:

- Although not a new technology, SQL is a solid, tried and true way to create, read, update and delete (CRUD) data.
- Node.js brings the flexibility of Javascript to the server side. In conjunction with libraries like Express, it is very easy to instantiate a web server.
- RESTful APIs are a straightforward method to add and retrieve data from an HTTP server. However, they present limitations when the complexity of the data or the queries is high.
- To deal with more complex database interactions, GraphQL is a powerful tool. One can use a library like Apollo to integrate GraphQL into a web server as a middleware.
- React uses functional programing to dynamically create pages where state is used to control behaviour and manipulate data. The flexibility its component-based programming gives you opens a new dimension in Web Programming.
- Redux allows you to centralize the storage of states for all React components, becoming the single source of truth.
- Appolo works on the client side enabling GraphQL queries.
- Material UI makes Web and App development much more productive by provinding you with a library of components to be used to create common interface elements.
- JSX (XHTML in JavaScript) and JSS (CSS in JavaScript) gives ypu the opportunity to use XHTML and CSS in a much more programmatic way.

## Instructions for running the server

Commands must be run from the `server` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm run start:dev
```

## Instructions for running the Client

Commands must be run from the `client` directory:

### Installation

```bash
npm install
```

### Run

```bash
npm start
```

### Build

```bash
npm run build
```
