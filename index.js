const fs = require('fs');
const inquirer = require('inquirer');

console.log('Please answer to create your README.')

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
        type: 'input',
        name: 'description',
        message: 'Please describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list the required steps for your project installation',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your project be used?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests does your project have?',
        default: 'npm test'
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
            'BSD',
        ]
    },
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?'
    }
];

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        let gitHubURL = `https:/github.com/${answers.gitHubUserName}`;
        let newREADME =
            `# ${answers.projectTitle}

## Author

${answers.userName}

## License

This project is protected under the ${answers.license} license.
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)   

## Table of Contents:

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Questions](#questions)

## Description

${answers.description}

## Installation

Please run these commands to install dependancies for this project: ${answers.installation}

## Usage

${answers.usage}

## Contributors

${answers.contributors}

## Tests

${answers.test}

## Questions

If you have any questions regarding this project, you can find me at [${answers.gitHubUserName}](https://github.com/${answers.gitHubUserName}) 

and/or at ${answers.userEmail}.`
        console.log(newREADME)
         // function to write README file
        fs.writeFile("genREADME.md", newREADME, function () { return console.log('README generator ') })
    }
    )
}

// function call to initialize program
init()

