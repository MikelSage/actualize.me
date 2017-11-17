# Actualize.me

## Introduction

Actualize.me is a platform for students and instructors to aggregate and gain insight from assignment data.
As an instructor, you can add projects to a module, see all the projects for the current module you are teaching, and grade submissions from students.
As a student, you can see your average scores, see all the projects for the current module, and submit a project to be graded.
Find the express api [here](https://github.com/MikelSage/actualize.me-api)

## Installation

Clone down this repo and run:
```shell
  $ cd actualize-me
  $ npm install // install node packages
  $ npm start // spins up server
```
## Deployment with Heroku

In project directory:

```bash
$ heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git
$ git add .
$ git commit -m "Deploy"
$ git push heroku master
$ heroku open
```
Afterwards replace the cloudUrl in `.src/requests.js` with your heroku URL
