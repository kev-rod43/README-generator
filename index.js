const inquirer = require('inquirer');
const fs = require('fs')
const markdownGen = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the tile of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },

    {
        type: "input",
        name: "installation",
        message: `What are the steps required to install your project? Provide a step-by-step description
        of how to get the development environment running.`,
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },

    {
        type: "input",
        name: "screenshot",
        message: "What is the relative path or href to the screenshot you would like to use for your app?",
    },

    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributors of this project to follow?",
    },

    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["	AFL-3.0", "Apache-2.0", "WTFPL", "MIT", "PostgreSQL"],
    },

    {
        type: "input",
        name: "githubUsername",
        message: "What is your github username?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
