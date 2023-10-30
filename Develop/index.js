const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// IMPORT OTHER JS FILE WITH FUNCTIONS, EXPORT IS ALREADY WRITTEN


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: "title"
    },
    {
        type: 'input',
        message: 'Please type a description of your project.',
        name: "description"
    },
    {
        type: 'input',
        message: 'How would a user install your project?',
        name: "installation"
    },
    {
        type: 'input',
        message: 'What functions can your project provide to a user?',
        name: "usage"
    },
    {
        type: 'list',
        message: 'What is the license for this project?',
        choices: ["MIT", "GNU", "Apache 2.0"],
        name: "license"
    },
    {
        type: 'input',
        message: 'Who all contributed to this project?',
        name: "contributors"
    },
    {
        type: 'input',
        message: 'What tests did you run on this project? What were the results?',
        name: "tests"
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: "github"
        //will be under "questions" section in md file
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: "email"
        //will be under "questions" section in md file
    },];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (error) => {
        if (error) console.log("Oops, something went wrong!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("README", data)
    })
}

// Function call to initialize app
init();
