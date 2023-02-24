# Epicodus Capstone Planning 

### Project Idea: 
* Curated Fitness App (digital personal training -- Nike Training Club)  
* Survey and pre made categories: Weight Loss, Strength, Cardio/Stamina, Hybrid,  15 minute WOD 

### Possible Names: 
* The WOD App
* Cyber Coach

## Research & Planning Log
#### Friday 02/17/2023
* 8:15: begin planning app and technologies used 
* 9:00: research how to connect C# and React Projects
* 9:48: watching tutorial on connecting web API to react app
* 10:30: continue referencing documents and tutorials for planning steps
* 11:37: testing cli commands to create sample projects
* 1:20: begin first draft of app mock up diagram
* 2:04: formulating mvp 
* 2:51: experimenting with sample project
* 3:40: begin proposal
* 4:45: finish proposal

#### Friday 02/24/2023 
* 8:15 begin finalizing components 

## Notes:

* Reference LHTP docs for  project set up, packages and scripts
* [tutorial#1](https://www.youtube.com/watch?v=gpfP60KjmZU)
* [tutorial#2](https://www.youtube.com/watch?v=ON-Z1iD6Y-c&t=0s)  //BETTER TUTORIAL

//CREATE SAMPLE PROJECT TO TEST `DOTNET NEW REACT` COMMAND 
  //DEV SERVERS MUST BE RUN SEPARATELY AND NPM COMMANDS ARE ONLY IN THE COMMAND PROMPT (or within ClientApp)
  //COMES WITH API AND REACT COMPONENT

//CREATE SAMPLE PROJECT TO TEST `DOTNET NEW REACTREDUX` COMMAND 
  //COMES WITH REDUX FOR CLIENT SIDE 
  //IS THIS BEST FOR MY MYP?? 

//CONSIDER USING FIRESTORE DB AFTER WEEKEND HW

## Build Steps

1. Create ASP.NET web api for server side concerns    `//USE EF CORE INSTEAD OF SMS`
   1. create tables
   2. create models
   3. add controller methods

* Use .NET C# for backend and React for UI
  * [dotnet new react CLI Reference](https://learn.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-7.0&tabs=visual-studio)

2. Create React UI and integrate API with .env file (add .env to gitignore)
   1. use modals for forms to create and update
   2. landing pages for displaying details in a table 
   3. 

* Install react bootstrap? 
* [tutorial#1](https://www.youtube.com/watch?v=gpfP60KjmZU)
  * utilities: 
    * import {NavLink} from 'react-router-dom';
    * import {Navbar,Nav} from 'react-bootstrap';
    * install module react-router-dom.
    * import {BrowserRouter, Route, Switch} from 'react-router-dom'; {43:30}timestamp
    * import {Modal, Button, Row, Col, Form} from 'react-bootstrap'; {47:35}timestamp    Pop op window for forms

3. Add Web API folder into react project?

4. Deploy: [Host and deploy with ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-7.0)


## Key Features for MVP

1. Sign up and log in.
2. Categories to find a workout for specific needs.
3. user is able to complete a survey and receive a workout of the day (WOD).

## Stretch Goals

4. App has quality styling, interactive, and page is reactive to different view ports.
5. Authenticate user and activity tracking. 
6. User Profile page.
7. User is able to give workouts a rating and sort by highest rating.
8. Schedule feature where user can plan weekly/monthly or pick a pre made schedule.
9. Animations for the homepage.
10. Animations for workout demonstrations.
11. Mock customer reviews.
12. Workouts by sport or Fitness level. 
13. Goal Tracking/ Achievements.
14. Integrate an API for BMI, Geo-location, or Nutrition.
15. Notifications and reminders
16. Goal Setting