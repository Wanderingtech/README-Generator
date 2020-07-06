const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your full name'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type:'input',
        name: 'description',
        message: 'Please describe your project'
    },
    {
        type: 'input',
        name:'installation',
        message: 'Please list the required steps for your project installation'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How will your project be used?'
    },
    {
        type: 'confirm',
        name: 'ifTest',
        message: 'Is there a test written for your project?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Who were the contributors to this project? (List with comma separation please)"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to apply to your project?',
        choices: [
            'none',
            'MIT',
            'Simplified BSD',
        ]
    },
    {
        type: 'input',
        name:'gitHubUserName',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();