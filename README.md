# Famfight

<h1>Setup</h1>

```javascript
npm start (starts server on localhost 3000)
webpack (starts bundling jsx files)
npm run test (starts testing for sockets & database)
npm run testdb (starts testing for database only)
```

<h1>Description</h1>

A family-oriented platform to resolve disputes amongst siblings who can't decide where to eat.

<h1>Core Features</h1>
<ul>
  <li>Able to poll two users on where they want to eat</li>

  <li>After both polls have been submitted, both users are rerouted to the quiz page</li>

  <li>Upon signup, user is created in mongo database, and their unique ID is used throughout the entire process of the application</li>

  <li>Backend is able to determine which user won the quiz if the two users happen to disagree on where to eat (needs work on frontend)</li>

  <li>The tests for sockets include: checking if socket connects by sending message from client to server and back to client, & if multiple users are able to send messages to each other</li>
</ul>



<b>Warning</b> Do not rely on the database tests located in index.js file in test directory<br />
<b>Warning</b> Database is based locally, so use mlab or other service for hosting database online<br />
<b>Warning</b> Application is hard coded to expect two users only

<h1>Opportunities</h1>
<ul>

<li>Include 'socket momma' to send out the poll to her child sockets</li>

<li>Resend a different question if both users answer the quiz question correctly</li>

<li>Allow users to signup with their facebook or google account</li>

<li>Implement chat system & party system to create family experience</li>

<li>Provide other games upon conflict instead of just a quiz</li>

<li>Offer custom polling options, such as: homecooked meals, movies, chores, etc.</li>
</ul>
<br /> <br />

Contributors Austin N, Michael L, & Jeremy 
