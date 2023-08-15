// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the main usage of this application?',
    },
    {
        type: 'input',
        name: 'contribution/resources',
        message: 'Please provide the names or links of any contributors/resources that assisted in the making of this application.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps on testing the application ?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }
return inquirer.prompt(questions);

// Function call to initialize app
init();
