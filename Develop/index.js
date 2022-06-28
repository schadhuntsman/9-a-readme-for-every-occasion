// TODO: Include packages needed for this application
//need to add badges to readme when choosing a license

//put link to github profile after it's added to the doc

//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [];

inquirer.prompt (
    [
        {
            type: 'input',
            name: 'title',
            message: "What's the name of your project?",
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
            choices: ['MIT', 'Apache', 'GPL', 'GNU', 'Unlicensed'],
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
            message: "Are there any tests?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {      
            type: 'input',
            name: 'github',
            message: "What's your GitHub profile page?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}},
        }
     ]
    
     //  title, install, usage, license, descrip, contrib, test, questi, git, email
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
        email  
        
})=>{
    
        //template for usage
const layout =`# ${title}
![licenseBadge](https://img.shields.io/badge/license-${license}-important.svg)
* [Installation](#installation)
* [Usage](#usage)

* [Description](#description)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#qustions)
* [GitHub](#github)
* [Email](#email)
# Installation
${installation}
## Usage
${usage}
## License
${license}
### Description
${description}
### Contributing
${contributing}
## Tests
${tests}

## Questions :
* Github: [${github}](https://github.com/${github})
* Email :[${email}](mailto:${email})`;


// const github = github.textContent += ".github.io";
//Funtion to create new readme using file system model
writeToFile(title,layout);
}
);
//creating writeToFile function
function writeToFile(fileName,data){
//file system model

//file system
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(error)=> {
        if(error){
            console.log(error)
        }
        console.log('Your Readme file has been genrated');
    })

}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
