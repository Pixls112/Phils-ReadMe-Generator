// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
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
        name: 'contribution',
        message: 'Please provide the names or links of any contributors/resources that assisted in the making of this application.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps on testing the application ?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['mit', 'apache-2.0', 'gpl-3.0', 'none']
    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (error) {
        error ? console.log(error) : console.log('README.md file was successfully created!')
    })
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        writeToFile("./GeneratedREADME/sample-README.md", data);
    });
}


// Function call to initialize app
init();

