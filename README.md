# Actualize.me

## Introduction

Actualize.me is a platform for students and instructors to aggregate and gain insight from assignment data.
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
