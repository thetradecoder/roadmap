# ROADMAP
This is a planning app built with MERN Stack. 
You can enlist your short term and long term plans here and update your progress details and can track them easily.

## Complete the set up

Add a `.env` file in the `backend` folder and add `MONGO_URI=yourmongodburi` in `.env` file

***

# Documents 
## Install react app
`npx create-react-app roadmap`

## Install gh-pages
`npm install gh-pages`

Add `.env` to the `.gitignore` file 

## Create an empty repo on github named `roadmap` (no file)

## Add homepage to package.json (add your own project url)
`"homepage":"https://thetradecoder.github.io/roadmap"`

## Add these two properties in the script area in package.json file

```
"script": {
"predeploy":"npm run build",
"deploy":"gh-pages -d build"
}
```
## Add git to your local project by this command
`git init`


## Add remote (github) url to your local project (use your own project url)
`git remote add origin https://github.com/thetradecoder/roadmap.git`

## Add local changes to your project
`git add --all`

## First commit to your project 
`git commit -m 'local update'`

## Send your source code to github from the local machine
`git push origin master`

Check your github, the source code uploaded to your github master branch.

## Deploy your project to github pages (gh-pages). 
This time is for testing purpose, later we'll deploy the developed app

`npm run deploy`

Check your github, the app has been deployed to gh-pages branch.

# Let's build the main app
As the app will require to store our data, we'll use mongoDB and all the operation will be via our own server. So, now we need a server. Let's create it for our project

## Make a folder in your current project
`mkdir backend`

Go to the folder 

`cd backend`

## Make an empty project here 
`npm init -y`

Create a `.gitignore` file here and copy and paste the code from the earlier `.gitignore` file. Then make a `.env` file.

## Install some required packages in the backend
`npm install express dotenv cors body-parser mongoose mongodb`



