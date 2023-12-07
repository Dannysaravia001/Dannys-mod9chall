// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generatePage = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name!");
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage description!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses would you like to add in the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a license!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter how to install!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usages for the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the usage information!');
                return false; 
            }
        } 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        } 
        console.log('README.md generated successfully!');
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generatePage(answers); // Assuming generatePage is an alias for generateMarkdown
            writeToFile('README.md', readmeContent);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
