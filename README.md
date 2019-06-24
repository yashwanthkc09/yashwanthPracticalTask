# Practical Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Please fallow below steps to run the Project
## Step 1: 
   download the project and navigate to project folder
## Step 2:
   create a collection named collections ( mongodb shuold be installed )
## Step 3:
   open the command prompt from the folder path and run npm i command ( angular cli should be installed )
## Step 4:
   after that run npm install pm2 -g for golbal installation
## Step 5:
   once npm i is completed
## Step 6: run the below commands
   ## pm2 start server.js to run the application in fork mode with one process
   ## pm2 start server.js -i (number of process) for running application in cluster mode with multiple  process(Option to configure           number processes and a shared port number)
   ## for Example : pm2 start server.js -i 4
   ## pm2 start server.js --watch (Automatic reload process on exception)
   ## pm2 logs (Centralised log manager with PID’s)
   ## pm2 monit (Monitoring CPU, Memory usage)
   ## pm2 delete 0 for deleting the process with id
   ## pm2 show <app-name | id> for more details
   ## for example pm2 show 0 
   ## pm2 stop 0 to stop process 
   ## pm2 restart 0 to reload process
   
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
