// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [];

inquirer.prompt (
    [
        {
            type: 'input',
            name: 'title',
            message: "name of your project?",
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
            name: 'usage',
            message: "How do you use your project?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'list',
            name: 'license',
            message: "Which licenses did you use?",
            options: ['The MIT License', 'Apache License', 'The GPL License', 'GNU License', 'NA'],
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'description',
            message: "description to be followed",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Who is involved in your project?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'tests',
            message: "Who is involved in your project?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'questions',
            message: "Do you have a question you'd like to ask?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },       
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username:',
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        }
    ]
    ).then(({
        title,
        installation,
        usage,
        license,
        description,
        contributing,
        tests,
        questions,
        github,
        email,  
    }) ==> {
        //template for usage
const layout =`# ${title}`
    }  
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
