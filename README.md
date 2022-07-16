# IMAGE LIBRARY (CRUD App)

### Deployed Link :- https://hackerearthassessment.netlify.app

## All the required parameters :-

### Minimum requirement :-

`Done` Database Model Parameters :[ImgName, ImgURL, ImgDetails] <br />
`Done` A GET request to the base URL should list All Gallery Images as Cards(3 cards per row) <br />
`Done` A GET request to /show/:id should list details of images. This will be on click of the above Card <br />
`Done` A POST request to / should submit the above form and add it to the database. <br />
`Done` A GET request to /:id/edit should show a form which has a prefilled Image Name & it must be possible to change Image URL & Image Details. <br />
`Done` A PUT request to /:id/edit should submit the above form and change the appropriate details in the database. <br />
`Done` A DELETE request to /delete/:id should delete that particular image from the database. <br />
`Done` A Delete & Edit button should be there in /show/:id <br />

### [Plus Point]

`Done` Implement a Pagination feature in the base URL. i.e The base URL should only list the first 9 entries on the 1st page. Next 9 entries on the 2nd page & so on.<br />
`Done` Implement a Search feature in the base URL. i.e It must be possible to search an image by its name across all pages.<br />

### [Advanced ]

`Done` Host the FullStack App on Heroku/AWS/Azure or any deployment service you like.

## Deployment Instructions :-

— This project has two main parts :- `Client` & `Server` <br/>
— Two hosting provider's services are used to host both `Client` & `Server`

    1. Netlify
    2. Heroku

### `Client` Deployment Instructions :-

#### Step 1: Install Netlify

```
$ npm install netlify-cli -g
```

#### Step 2: Choose a new project

While using Netlify CLI, First create production repository by running command `npm run build`<br/>
Now run command `netlify deploy` to start deployment procedure then follow command line prompts and choose yes for new project then choose any name you want to give to your project and select ./build as your deploy folder and voila you have a production React app!

```
$ npm run build
$ netfliy deploy
This folder isn't linked to a site yet
? What would you like to do?
    => Link this directory to a existing site
    +  Create and configure a new site (selected)
Choose a site name or leave blank for a random name. You can update later.
? Site name (Optional) hackerearthassessment
(Login to your netlify account/ Create if you are not registered)
? Deploy path ./build

Your app is ready to be used!
```

### `Server` Deployment Instructions :-

#### Step 1: Install Netlify

```
$ npm install heroku
```

#### Step 2: Login to the heroku

```
$ heroku login
```

#### Step 3: Initialize git for `Server` repository

Commit your code to the repository and deploy it to Heroku using Git. <br/>
Follow the below commands

```
$ git init
$ heroku git:remote -a rishabhpanchal
$ git add .
$ git commit -m "Hackerearth is awesome!"
$ $ git push heroku master
```













# LIVE(https://rishabhpanchal.me)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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
