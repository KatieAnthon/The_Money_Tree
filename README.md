# The Money Tree
The Money tree is a mobile application that allows users to see  and optimise their spending habits.

The app is designed for users to log in and upload a bank statement to the interface. The app breaks down their spend into the categories that they are spending in and tells them if they have reached their saving goal for the month.

## Design 
__Mock-up created using figma__
<img width="792" alt="Screenshot 2024-03-25 at 23 38 38" src="https://github.com/KatieAnthon/The_Money_Tree/assets/94082001/c95374e2-7077-45aa-9b00-6b358eeee52c">

## Structure

This repo contains the Frontend application: 
* Components - contains all the files for reusabable components
* pages - contains different pages of the App.

The frontend application communicated with the backend api via HTTP requests, and need to be run separately.

## Getting Started

### Prerequisites:
If you haven't already, make sure you have node and NVM installed.

1. Install Node Version Manager (NVM)
   `brew install nvm`
Then follow the instructions to update your ~/.bash_profile.
2. Open a new terminal
3. Install the latest version of Node.js.
   `nvm install node #node being the latest version`

## Set up the Project:
1. Install the latest versions of NPM packages:

   `cd frontend`
   
   `npm install`
   
   `npm install expo`
   
3. Enter your local IP address in .env 
  `const IP = 'ENTER YOUR IP'`;

## Running the app
To see this running in expo from your phone:
1. `cd frontend`
2. `npm start`
3. Scan the barcode (You will need to download Expo Go if you don't have this installed already)
4. Preview the App on your Iphone or Android device

## Backend
check out the [backend](https://github.com/KatieAnthon/money_tree_backend/tree/main)

## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

