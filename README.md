This sample code is related to Behavior Driven Development and a Javascript 
application written in Angular. It covers how to execute Gherkin features via 
Protractor and Cucumber.js on top of an Angular application.

## Installation

Node.js, npm and Bower are required to the installation process.

```bash
$ npm install
$ npm run bower
```

_Note: `npm run bower` is only a shortcut of bower install, so feel free to 
run it via your global installation._

## Usage

```bash
$ npm run start
```

You can open your browser to <http://localhost:3000/> to try the application.

## Tests

For now, you have to open 3 terminals because you need to:

* launch via application via `npm run start`
* run a Selenium server or PhantomJS (which is in devDependencies of this 
  project, so you can run `npm run phantom`)
* and finally run the Cucumber tests (via Protractor) with this command:
  `npm run test`

You should see that:

![Screencast](http://jeremybarthe.com/slides/2015-knplabs-bdd-javascript/images/cucumber-screencast.gif)
