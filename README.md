PR_MEAN
=======

This is a simple example that demonstrates how to make a single one page app that takes and input from a user and dynamically display’s it on the page.

The app was built upon the MEAN stack (MongoDB, Express, Angular.js and Node.js). 

##Summary
This App demonstrates:

- Using Angular and Angular forms
- POST to server
- GET from server
- Retrieving data from a MongoDB

##Prerequisites

MongoDB - Download and Install [MongoDB](http://www.mongodb.org/) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed.

Grunt - Task Runner - http://gruntjs.com/

Bower - Package Manager for the Web - http://bower.io

##What It Does
The app allows users to input there details (name, email and password) and these details are displayed in a list that is dynamically displayed on the web page with out reloading the webpage.

The app does form field checking on the client side before submitting the POST request to the server.

When running this app, it requires the use use MongoDB on default settings. Instuctions how to install Mongo can be found here. http://www.mongodb.org/

##To Get It Running
Once the files have been download, navigate to that directory in your terminal. Double check there is a package.json files and then enter:

`$ npm install`

&&

`$ bower install`

Make sure you MongoDB is running. Navigate to your directory where you placed the mongo binary's enter:

`$ mongod --dbpath /path/to/app/fullstack-dev`

Once your database is running, enter:

`$ grunt serve`

Watch the magic happen!