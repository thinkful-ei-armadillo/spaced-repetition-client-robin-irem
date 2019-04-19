# Spaced Repetition: SpadesSpanish -- ♠Spanish

♠Spanish is a fullstack app, optimized with computer science.
♠Spanish helps users learn Spanish easily with spaced repetition learning technique.

The most challenging part of learning a language is repetition and retaining new vocabulary. ♠Spanish helps users pratice without flashcards and in the way that they will retain their newly acquired vocabulary for a lifetime!

♠Spanish implements the spaced repetition learning technique by using a data structure (singly linked list).

User can concentrate solely on words because of ♠Spanish's simple design and soft colors!

The app requires a user to register for an account. Afterwards, when they sign up, the user accesses the dashboard where a list of words appear. The users can see their progress by skimming the dashboard quickly, seeing all the correct and incorrect answers. If they choose to start practicing, the app would simply provide whereever they left with their practice.

## Deployment: 
Live app: https://robin-irem-spaced-repetition-app.now.sh/register
Client repo: https://github.com/thinkful-ei-armadillo/spaced-repetition-client-robin-irem
Server repo: https://github.com/thinkful-ei-armadillo/spaced-repetition-server-robin-irem

## Contributors: 
Robin Khiv and Irem Secil Reel Sen

## Technologies:
Front-end: React (Router, Context), Cypress
Back-end: Node.js, Express, Postgres, Mocha/Chai
Deployment: NOW/Zeit, Heroku
Development: Git, GitHub

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
- You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
