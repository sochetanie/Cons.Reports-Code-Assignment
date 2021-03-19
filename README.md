# About

  Front End - React with react-bootstrap
  Back End - Node.js & Express (instead of Java, Python or PHP)
  Database - MySQL

# Getting Started

  inside service folder run `npm install` and after `npm run devStart`
  inside client folder run `npm install` and after `npm start`

# Instructions

Programming Language:  
Server side code could be any programming language like Java, Python or PHP and javascript/HTML/CSS should be used on the client. Classic modern ES6 Javascript with a framework like react/vue is fine but jQuery is not accepted. 

Backend db could be SQL based like mysql or noSQL based like mongodb. In memory data stores like redis could also be utilized. Basic file storage is not preferred.

Task: 
Create an HTML interface on the browser to accept a stream of characters from a user and then submit it to a server application. The submission could be at every keypress or after pressing the submit button. The server application should receive the user input, process the data and send the response back. If the input is previously processed, it might fetch the result directly from records stored in a database rather than performing the processing again. 

Rules for processing input:
The user inputs the string of reasonable length that gets submitted to the server via a form post. If the server application detects "aaa" occurring in the data stream, the browser should display the number 1 to the user, if it detects "aba", it should display the number 2 to the user. 

Further Notes:
1. "aaaba" would only find “aaa”, whatever it encounters first and therefore only return 1.
2. "aaaaba" would find "aaa" followed by "aba" so it should return 12.
3. "aaaabaaaaaba" would return 1212
4. "aaabaaaa" would return 11
