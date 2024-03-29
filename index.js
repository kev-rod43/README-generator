const inquirer = require('inquirer');
const fs = require('fs')
const markdownGen = require('./utils/generateMarkdown.js')

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
        name: "contributing",
        message: "What are the guidelines for contributors of this project to follow?",
    },

    {
        type: "input",
        name: "tests",
        message: "Provide information on how to run the built-in tests.",
    },

    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["", "AFL-3.0", "Apache-2.0", "MIT-0", "PostgreSQL"],
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {err ? console.error(err) : console.log("It did the thing");}
)}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => markdownGen(answers))
        .then((data) => writeToFile("generatedREADME.md",data))
}

init();
