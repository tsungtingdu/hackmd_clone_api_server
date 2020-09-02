# HackMD Clone API server

This is a api server of my **HackMD Clone** project.

## APIs
Roles:
* admin
* member: people who signed in
* user: people who did not sign in 

Endpoint:
* https://hackmd-clone.herokuapp.com

| Method  | Route  |  Description |
|---|---|---|
| POST  | /api/user/signup  | user can create account with email  |
| POST  | /api/user/signin  | user can sign in with email as member  |
| GET  | /api/posts  | member can see his/her own posts  |
| GET  | /api/post/:postId  | member can see a post  |
| GET  | /api/post/:postId/view  | user can see a public post  |
| POST  | /api/post/:postId  | member can create a new post |
| PUT  | /api/post/:postId  | member can update a post  |
| DELETE  | /api/post/:postId  | member can delete a post  |
| GET  | /api/collaborators/:postId  | member can see all collaborators of a post  |
| POST  | /api/collaborator/:postId  | member can add a new member as collaborator |
| DELETE  | /api/collaborator/:postId  | member can remove a new member as collaborator  |

Online API doc
* https://hackmd-clone.herokuapp.com/api-doc/#/

![](https://i.imgur.com/ki2ktnU.png)

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
6. start app
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
