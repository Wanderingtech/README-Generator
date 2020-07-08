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
            'Simplified BSD',
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
        
## Description

${answers.description}

## Table of Contents:

*[License](#license)
*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Links](#links)

## Installation

Please run these commands to install dependancies for this project: ${answers.installation}

##Usage

${answers.usage}

## License

This project is protected under the ${answers.license} license.

## Contributors

${answers.contributors}

## Tests

${answers.test}

## Questions

If you have any questions regarding this project, you can find me at [${answers.userName}](https://github.com/${answers.gitHubUserName}) 

and/or at ${answers.userEmail}.`
        console.log(newREADME)
        fs.writeFile("genREADME.md", newREADME, function () { return console.log('README generator ') })
    }
    )
}

// function call to initialize program
init()
 // function to write README file
// 