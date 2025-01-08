# State Refactoring

## Contents
[description](#description)
[usage](#usage)
[installation](#installation)
[development](#development)
[contributions](#contributions)

## description
This week I refactored this code to use the Redux library to handle global state variables. Previously it used a context API. This allowed the app to access the variables through the provider context. In order to change the way state is handled I had to change what was provided to the app in GlobalState.jsx. This is where the context was established however I changed it to use provider and store from react-redux. Doing this is much simpler than using a context API. I had to create the store file to be the central repository for the applications state. Actions and Reducers can then manipulate the state using dispatch. After changing the code the application still works as it should however the state management is updated to use redux.

## usage
to use this website you can visit the link here
https://one9-state-refactoring.onrender.com

## installation
This app uses many npm packages including react-redux. to install the necessary packages make sure you run npm install at the root level.

## development
As I mentioned in the description I started by modifying the global state and adding a store. I then had to sift through the rest of the code to update the way the state variable was being accessed. Before it was called from the context but instead I changed it to use State and Dispatch variables. State holds the value of the current state and dispatch allows the reducers to manipulate the state. 

## contributions
Any pointers or tips for this project are much appreciated. Any contributions can be made using github.
https://github.com/Riley6639/19-state-refactoring

