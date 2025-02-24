// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'entitled Description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: "Please provide usage information:",
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'Contributing',
    
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'Tests',  
    },
    {
        type: 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
