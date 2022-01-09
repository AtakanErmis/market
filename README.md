# market

A simple product listing web app for Getir Assignment. This project is created with React, Redux, Redux Toolkit, Next.js, TypeScript and SASS. For API solution, json-server is used.

- Live Demo: https://the-market-frontend.herokuapp.com/
- API Server: https://the-market-api.herokuapp.com/
- json-server API Repo: https://github.com/AtakanErmis/market-api

## How to run locally (development)

- Pull the latest source code from the repository to your computer: `git clone https://github.com/AtakanErmis/market`
- Install dependencies: `npm install`
- copy `.env.example` to `.env` and edit it to your needs.
- Run the app: `npm run dev`
  - It will listen to port 3000 on your network. You can access it by opening a browser and typing `http://localhost:3000`.

## How to run locally (production)

- Pull the latest source code from the repository to your computer: `git clone https://github.com/AtakanErmis/market`
- Install dependencies: `npm install`
- copy `.env.example` to `.env` and edit it to your needs
- Build the application: `npm run build`
- Start the application: `npm start`
  - It will listen to port 3000 on your network. You can access it by opening a browser and typing `http://localhost:3000`.

## How to deploy to heroku

- Pull the latest source code from the repository to your computer: `git clone https://github.com/AtakanErmis/market`
- Install Heroku CLI: `npm install -g heroku`
- Login to Heroku: `heroku login`
- Create a new app: `heroku create`
  - You can use the git remote command to confirm that a remote named heroku has been set for your app: `git remote -v`
- Push the source code to heroku: `git push heroku main`

# npm scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Generates optimized build of the application.
- `npm run start`: Starts the application (production).
- `npm tun test`: Runs tests.
- `npm run lint`: Lints the code.
