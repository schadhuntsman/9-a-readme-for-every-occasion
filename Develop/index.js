const inquirer = require('inquirer');
const fs = require('fs');



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
            message: "What's your GitHub username?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your e-mail address?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}}
        },
        {
            type: 'input',
            name: 'contact',
            message: "How should people contact you?",
            legitimize: (value)=>{ if(value){return true} else {return 'You need a value to continue'}},
        },
     ]
    
   
    ).then(({ 
        title,
        installation,
        usage,
        license,
        description,
        contributing,
        tests,
        github,
        email, 
        contact
        
})=>{
    
     
const layout =`# ${title}
![licenseBadge](https://img.shields.io/badge/license-${license}-important.svg)
* [Installation](#installation)
* [Usage](#usage)
* [Description](#description)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [GitHub](#github)
* [Email](#email)
* [Contact](#contact)
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
* Github : [${github}](https://github.com/${github})
* E-mail : [${email}](mailto:${email})
* Video demo : (https://drive.google.com/file/d/1RTXDNUR_M_Xft82E7IagrFCuNR6Q0-08/view?usp=sharing)
## Contact : ${contact}`;

//writefile function
writeToFile(title,layout);
}
);

function writeToFile(fileName,data){

//file system
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(error)=> {
        if(error){
            console.log(error)
        }
        console.log('Your Readme file has been genrated');
    })

}


