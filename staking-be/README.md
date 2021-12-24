## How to run the app

1. Clone the repo
1. Run `cp .env.sample .env` to create a `.env` file at the project root directory and change the environment variables as you wish.
1. Open a terminal in the project root and run `yarn install` to install the project dependencies.
1. Run `export NODE_ENV={environment}` first `npx sequelize db:migrate` to migrate database tables. `environment` can be one of 3 - `development`, `staging`, `production`
1. Run `yarn test` to make sure everything is working correctly.
1. Run `yarn start` to start the development server
1. Open `http://localhost:3001` or use whatever port you supplied in your environment variable.
1. Run `yarn build` to start the production server

## Eslint and Prettier

The project is configured with Eslint and Prettier, assuming to use VSCode as IDE

- Please use VSCode
- Install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions in your VSCode
- The project is configured to format the code lines automatically when save a file

## Architecture

- express for APIs
- postgreSQL for database
- morgan & winston for logger
- dotenv for environment variables
- sequelize as ORM for postgreSQL
- Json web token for authentication

### Check AWS CodeDeploy
 - Create CodePipleline
 - Create Application
 - Create Deployment Group

