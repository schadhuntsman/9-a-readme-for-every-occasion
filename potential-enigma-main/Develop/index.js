// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [];

inquirer.prompt {
    [
        {
            type: 'input',
            name: 'title',
            message: "Title of your project?",
            //legitimize choices to find if the user put an answer.
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}},
        },
        {
            type: 'input',
            name: 'installation',
            message: "How do you install your project?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'directions',
            message: "Directions to be followed",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'installation',
            message: "People involved in project?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'operation',
            message: "How do you use your project?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'list',
            name: 'licensure',
            message: "Which licenses did you use?",
            options: ['The MIT Licensure', 'Apache License', 'The GPL License', 'GNU License', 'NA'],
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 
        }
    ]
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
