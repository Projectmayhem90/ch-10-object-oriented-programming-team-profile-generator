const inquirer = require('inquirer');

const fs = require('fs');

// Data added for selections
const questions = [
    {
        type: 'input',
        message: 'What is your title?',
        name: 'title',
    }
];

//function writeToHtml(writeToHtml, data) {