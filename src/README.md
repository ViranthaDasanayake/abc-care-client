# Angular App Deployment using Firebase

This repository contains an Angular app that can be deployed to Firebase hosting. Follow the steps below to deploy the app.

## Build and Deploy

1. Build your Angular app:

    ng build

2. Initialize firebase hosting:

    firebase init

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No
? File dist/index.html already exists. Overwrite? No

2. Deploy to firebase:

    firebase deploy