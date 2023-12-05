// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
const questions = () => [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },{
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },{
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },{
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },{
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },{
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },{
        type: '',
        name: '',
        message: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('');
                return false; 
            }
        } 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
