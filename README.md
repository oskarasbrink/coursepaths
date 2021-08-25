# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Course Pathways Configrations

This app is automated and the changes to the contents can be made using the pathwaysContents.json file.

### pathwaysContents.json

It contains an object that mainly has inside three objects which refers to how many rows there in the website.

The current website has three rows now (each row has some courses cards) and the benefits of the rows is to make the pathways looks clean when connecting courses togather.

For example: you migth need to add a new row if you will add new courses to the pathways and you will do that in case that you feel it is more appropriate than adding the new courses to the current rows.

#### To add a new row

you need just to copy one of the current rows and add it to the json file but then you need to change it's content.

#### The contents of each rows

each row has two objects:

1- the row id (which has to be unique for each row)

2- the cards objects which contains all the cards on the that row (courses)

#### Each card in the cards object

Each card is simply represent course contents:

1- the id and it needs to be unique

2- the connections (which means all the arrows that start from this card to ther cards "not the other way around").. if there is no connections like in the case of the card "008" you leave it as an empty aray.
```
For example in our case for the first card which is "001" it has a connections array like this :
"connections": [{"targetId": "002","targetAnchor": "left","sourceAnchor": "right"}],
```
So the array has only one object "which means only one connection" the arrow start from the first card "001" and it goes to "002" card  and it also specifiy that it will points to the left side of the "002" card and it will start from the right side of the "001" card  (that is a good feature so when connecting the cards with each others to draw the paths you make sure that it looks clean and you can control the paths of the arrows.

3- the book link.

4- the site link.

5- the .dbc link.

## Docker environment for project

```
cd ~/all/git/lamastex/coursepaths
docker build -t lamastex/node14 .
docker run --rm -d -it --name=coursepaths  --mount type=bind,source=${PWD},destination=/root/GIT -p 3000:3000 -p 5000:5000 lamastex/node14
```

## Deploy in a Hurry inside `coursepaths` docker container

To test and debug live do:

```
docker exec -it coursepaths /bin/bash
cd /root/GIT/
npm i
npm start # served at http://localhost:3000/
```

To check the static build is ready for web server deployment do:

```
docker exec -it coursepaths /bin/bash
cd /root/GIT/
npm i
npm run build  
npm install -g serve 
serve -s build  
```

If all is okay in `http://localhost:3000/` or port `5000` then copy contents of `build/` into webserver of choice.

## Available commands in detail 

In the project directory, you can run:

### `npm i`

Install via `npm`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### To edit the index.html

edit `src/App.js` to make changes to static build.
