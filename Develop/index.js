// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import fs, { read } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const promptUser = async () => {
    const data = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a description of your project:',
            name: 'entitledDescription',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: "Please provide usage information:",
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are your test instructions?',
            name: 'tests',
        },
        {
            name: 'license',
            type: 'list',
            message: 'What license would you like to use?',
            choices: [
                'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'
            ],
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ]);   
    return data;

};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfuly created README.md')
    );
};

// TODO: Create a function to initialize app
async function init() {
    const data = await promptUser()
    console.log(generateMarkdown(data)) ;
        writeToFile('README.md',generateMarkdown(data))
    
}

// Function call to initialize app
init();

