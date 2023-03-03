# Epicodus Capstone Planning 

### Project Idea: 
* Curated Fitness App (digital personal training -- Nike Training Club)  
* Survey and pre made categories: Weight Loss, Strength, Cardio/Stamina, Hybrid,  15 minute WOD 

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
* 8:15: begin finalizing components 
* 9:30: create project using create react app
* 10:10: set up file structure  
* 11:30: continue adding components while researching and adding to planning notes
* 1:00: Research styled components vs tailwind 
* 2:00: watching tailwindCSS tutorials
* 4:15: plan steps for next coding session 

### Friday 03/02/2023
* 9:00: reference example repo and take notes 

## Notes:
* [example repo](https://github.com/DonovanWeber/Exercise_Tracker_REACT_capstone)

* Setup layout for a workout 
* add timer to StartWorkout Page
* CRUD for workouts and display on user profile page
* Reference LHTP docs for  project set up, packages and scripts
* [tutorial#1](https://www.youtube.com/watch?v=gpfP60KjmZU)
* [tutorial#2](https://www.youtube.com/watch?v=ON-Z1iD6Y-c&t=0s)  //BETTER TUTORIAL

## Build Steps

1. Use Firebase and Firestore for server side concerns
   1. create collections
   2. create relationships through an id field
   3. add hooks 

2. Create React UI and integrate API with .env file (add .env to gitignore)
   1. use modals for forms to create and update
   2. landing pages for displaying details in a table 
   3. 

* Install TailwindCSS for smaller components and Styled Components for larger content-wrappers
* Install react router dom
* [tutorial#1](https://www.youtube.com/watch?v=gpfP60KjmZU)
  * utilities: 
    * import {NavLink} from 'react-router-dom';
    * import {Navbar,Nav} from 'react-bootstrap';
    * install module react-router-dom.
    * import {BrowserRouter, Route, Switch} from 'react-router-dom'; {43:30}timestamp
    * import {Modal, Button, Row, Col, Form} from 'react-bootstrap'; {47:35}timestamp    Pop op window for forms

3. Add .env and instructions to readme with template.

4. Deploy with Firebase hosting [Here](https://www.learnhowtoprogram.com/react/react-with-nosql/hosting-with-firebase)


## Key Features for MVP

1. Sign up and log in.
2. form to create a workout. 
3. workouts are stored in collection with day property for scheduling feature.

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