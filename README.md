# Node Capstone

![landing page](https://user-images.githubusercontent.com/36899100/47837152-f6ba0400-dd78-11e8-9a0d-a81334001ae6.png)

## The Idea

This app aims to give developers one place to organize their projects and keep track of their tech stack. Make goals or add in relevant info associated with your stack. Complete challenges to update your skills.

## Tech Stack

* Node 
* Express
* MongoDb
* Mongoose 
* Pug 
* Scss
* Mocha
* Webpack

## Pages 

![techs page](https://user-images.githubusercontent.com/36899100/47837157-f91c5e00-dd78-11e8-8ea1-083b5b7d5b21.png)
![challenge page](https://user-images.githubusercontent.com/36899100/47837161-fae62180-dd78-11e8-86d8-bf20dea3b33f.png)
![projects page](https://user-images.githubusercontent.com/36899100/47837165-fd487b80-dd78-11e8-97e0-7833ad0e4749.png)

## Api Endpoints
### User Endpoints
#### api/users
#### POST
+     returns new user profile

#### api/login
#### POST
+     returns token that's needed for access to features

### Tech Endpoints
#### api/tech
#### GET
+     returns all user techs

#### api/tech
#### POST
+     adds a new tech and returns it
### Parameters: 
+     title=[some title]                this parameter adds a title to new tech 
+     info=[some info]                  this parameter adds info to new tech
+     check=[red or yellow or green]    this parameter adds the progress to new tech

#### api/tech/:id
#### DELETE
+     deletes tech with given id

#### api/tech/:id
#### POST
+     updates tech with given id
### Parameters: 
+     title=[some title]                add this parameter to update title
+     info=[some info]                  add this parameter to update info
+     check=[red or yellow or green]    add this parameter to update progress

### Challenge Endpoints
#### api/challenge
#### GET
+     returns challenge

#### api/challenge
#### POST
+     returns new challenge

### Project Endpoints
#### api/project
#### GET
+     returns all user projects

#### api/project
#### POST
+     adds a new project and returns it

#### api/project/:id
#### DELETE
+     deletes project with given id

#### api/project/:id
#### POST
+     updates project with given id

## Live Website
#### Link: https://qamapp.herokuapp.com/
#### Demo Account
* Username: Testuser
* Password: testuser123
