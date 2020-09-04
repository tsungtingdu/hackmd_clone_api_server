# HackMD Clone API server

This is a api server of my **HackMD Clone** project.

## APIs
Roles:
* admin
* user: people who signed in
* (visitor: people who did not sign in)

Access right of a post:
* Owner: user who created the post, can update and delete a post
* Collaborator: user who can update a post that created by other user
* Viewer: user who can see a private post that created by other user

Endpoint:
* https://hackmd-clone.herokuapp.com

Please refer to online API doc for more details:
* https://hackmd-clone.herokuapp.com/api-doc/#/

***
![](https://i.imgur.com/ki2ktnU.png)
***
| Method  | Route  |  Description |
|---|---|---|
| POST  | /api/user/signup  | visitor can create account with email  |
| POST  | /api/user/signin  | visitor can sign in with email as member  |
| GET  | /api/posts  | user can see his/her own posts  |
| GET  | /api/post/:postId  | user (owner, viewer, collaborator) can see a post  |
| GET  | /api/post/:postId/view  | visitor can see a public post  |
| POST  | /api/post/:postId  | user can create a new post |
| PUT  | /api/post/:postId  | user (owner and collaborator) can update a post  |
| DELETE  | /api/post/:postId  | user can delete his/her own post  |
| GET  | /api/collaborators/:postId  | user (owner, viewer, collaborator) can see all collaborators of a post  |
| POST  | /api/collaborator/:postId  | user (owner) can add a new user as collaborator of a post |
| DELETE  | /api/collaborator/:postId  | user (owner) can remove a collaborator of a post |
|---|---|---|
| GET  | /api/admin/posts  | admin can see all posts  |
| GET  | /api/admin/post/:postId  | admin can see a post  |
| DELETE | /api/admin/post/:postId   | admin can delete a post  |
| GET  | /api/admin/users  | admin can see all users  |
| GET  | /api/admin/user/:userId  | admin can see a user|
| PUT  | /api/admin/user/:userId | admin can update a user (name and role) |
| DELETE  | /api/admin/user/:userId | admin can delete a user |
| GET  | /api/admin/collaborators  | admin can see all collaborators|
| PUT  | /api/admin//collaborator/:id | admin can update a collaborator record |
| DELETE  | /api/admin//collaborator/:id | admin can delete a collaborator record |
***

## Test user
| role  | name  | email  |  password  |   |
|---|---|---|---|---|
| admin | admin | admin@gmail.com | 12345678 |
| user | user1 | user1@gmail.com | 12345678 |
| user | user2 | user2@gmail.com | 12345678 |
| user | user3 | user3@gmail.com | 12345678 |

***
## Install

1. Clone project
```
$ clone git@github.com:tsungtingdu/hackmd_clone_api_server.git
```
2. Go to project folder
```
$ cd hackmd_clone_api_server
```
3. Install packages
```
$ npm install
```
4. Create .env file with following info
```
// .env
JWT_SECRET=xxxxx
```
5. Run scripts and create database
```
DROP DATABASE IF EXISTS hackmd_clone_dev;
CREATE DATABASE hackmd_clone_dev;
USE hackmd_clone_dev;
```
6. Insert seed data
```
$ npx sequelize db:seed:all
```
7. start app
```
$ npm run dev
```

***

## Author
[tsungtingdu](https://github.com/tsungtingdu) (Tim)

Self-taught and trained in software development knowledge and skills, I am passionate about creating changes through technology.

You can find more about me here:
* [Medium](https://medium.com/tds-note)
* [Profile](https://tsungtingdu.github.io/profile)
* [LinkedIn](https://www.linkedin.com/in/tsung-ting-tu/)
* [Teaching Assistant at ALPHA Camp](https://lighthouse.alphacamp.co/users/3247/ta_profile)
