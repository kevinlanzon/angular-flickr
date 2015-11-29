Angular Flickr
========

Setup
-----
```sh
$ git clone https://github.com/kevinlanzon/angular-flickr
$ cd angular-flickr
$ npm install
$ bower install
$ npm start
Visit http//localhost:8000/app/
```

How to run tests
----
```sh
$ npm start             //to start the server
$ npm test              //to run the unit tests
$ npm run protractor    //to run the e2e tests
```

Technologies used
----
- AngularJS
- Node.js
- Grunt
- Karma for unit testing
- Protractor for feature testing
- HTML5
- CSS3
- SASS
- Bootstrap


File Structure
----------------
```
- app
  - assets
  - css
    - style.css
  - sass
    - style.scss
  - img
  - js
    - app.js: Contains angular module
    - controller.js: Contains the controller
  - partials
    - view1.html: Contains the homepage layout
  - index.html: Contains the main html
- test
  - e2e
    - homepageFeature.js: Contains end to end tests
  - unit
    - controllerSpec.js: Contains unit tests
```
