## Epicodus Capstone Planning 

Project Idea: Curated Fitness App

Possible Names: 
* The WOD App
* Cyber Coach

### Research & Planning Log
* 8:15: begin planning app and technologies used 
* 9:00: research how to connect C# and React Projects

### Build Steps

* Reference LHTP docs for  project set up, packages and scripts

1. Create C# web api for server side concerns

* Use C# for backend and React for UI
  * [dotnet new react CLI Reference](https://learn.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-7.0&tabs=visual-studio)
  * [Host and deploy with ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-7.0)

2. Create React UI and integrate API with .env file (add .env to gitignore)
* Install react bootstrap? [tutorial](https://www.youtube.com/watch?v=gpfP60KjmZU)
  * utilities: 
  * import {NavLink} from 'react-router-dom';
  * import {Navbar,Nav} from 'react-bootstrap';
  * install module react-router-dom.
  * import {BrowserRouter, Route, Switch} from 'react-router-dom'; {43:30}timestamp
  * import {Modal, Button, Row, Col, Form} from 'react-bootstrap'; {47:35}timestamp    Pop op window for forms

### Key Features for MVP
1. user is able to complete a survey and receive a workout of the day (WOD).
2. user is able to design and save their own workouts. 
3. App has quality styling, interactive, and page is reactive to different view ports.

### Stretch Goals
1. Authenticate user and store WOD history. 
2. User Profile page.
3. user is able to give workouts a rating and sort by highest rating.
4. Schedule feature where user can plan weekly/monthly or pick a pre made schedule.
5. Trainer user who can have clients and create/save workouts to a client.
6. Animations for the homepage.
7. Animations for workout demonstrations.
8. Mock customer reviews.
9. Workouts by sport or Fitness level 
10. Goal Tracking/ Achievements
11. Integrate an API
12. 