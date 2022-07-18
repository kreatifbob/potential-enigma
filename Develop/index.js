// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for this project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Provide a description for this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed (dependancies) to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation steps');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select from the following')
                return false;
                }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please explain how to test this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'askMe',
        message: 'What is your Github username so others can reach you for questions?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please provide your username so others can reach out to you with questions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email so there is another way to be reached for questions?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        });
}

// exports
module.exports = questions;