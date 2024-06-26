# Table of Contents:
* [Overview](#Overview)
* [Design](#Design)
* [Structure](#Structure)
* [Technologies used](#Technologies-Used)
* [Getting Started](#Getting-Started)
   * [Backend](#Backend)
   * [Frontend](#Frontend)    
* [Running Tests](#Running-Tests)
* [Contributing](#Contributing)
  


# The Money Tree
The Money Tree is a mobile application that helps users optimise their spending habits by breaking down expenses and tracking saving goals.

## Overview
The app allows users to log in and upload a bank statement. It categorises their spending and informs them if they have reached their saving goals for the month.


## Design 
__Mock-up created using figma__
<img width="792" alt="Screenshot 2024-03-25 at 23 38 38" src="https://github.com/KatieAnthon/The_Money_Tree/assets/94082001/c95374e2-7077-45aa-9b00-6b358eeee52c">

## Structure

This repo contains the Frontend application: 
* Components - contains all the files for reusabable components
* auth - contains authentication, including login and sign up pages and functionality.
* tabs - contains Transaction History and Spend Analysis pages.

The frontend application communicated with the backend api via HTTP requests, and need to be run separately.

## Technologies Used
* Frontend: React Native, Expo
* Backend: Java, Spring Boot, Gradle
* Testing: Jest
* Design: Figma

## Getting Started

### Prerequisites:
If you haven't already, make sure you have node and NVM installed.

1. Install Node Version Manager (NVM)
   ```brew install nvm```
2. Then follow the instructions to update your ~/.bash_profile.
3. Open a new terminal
4. Install the latest version of Node.js.
   ```nvm install node```

## Set up the Project:

#### Frontend:
1. Install the latest versions of NPM packages:

   ```cd frontend
      npm install
   ```
2. Install Expo CLI:
   ```
      npm install expo
   ```

##### Running the app
To see this running in expo from your phone:
1. start the App:
   ```
   cd frontend
   npm start
   ```
2. Scan the **barcode** displayed in the terminal or on the ExpoDevTools webpage using the Expo Go App (Available on iOS and Android)
3. Preview the App on your Iphone or Android device

#### Backend
check out the [backend](https://github.com/KatieAnthon/money_tree_backend/tree/main)

1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Build the backend application:
   ```
   ./gradlew build
   ```
3. Run the backend application:
   ```
   ./gradlew bootRun
   ```
4. Ensure MongoDB is running:
   ```
   mongod --dbpath money-tree-db  
   ```
## Running Tests:

To run the tests in the frontend:
1. Navigate to the tests for the frontend:
   ```
   cd frontend
   ```
2. Run the Jest tests:
   ```
   npm test
   ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

