const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const teamMember = [];

function promptManager() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the name of the Manager?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your id?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber'
            },
        ]
    )
    .then(function(answers) {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamMember.push(newManager);
    })
}

function menu() {
    inquirer.prompt([{
        type: 'list',
        message: 'Choose One',
        name: 'next',
        choices: ['Intern', 'Engineer', 'Done']
    }])
    .then(function(answers) {
        switch(answers.next) {
            case "Intern":
                //Intern Prompt//
                break;
            case "Engineer":
                //engineerPrompt()//
                break;
            default: 
            //generateHTML()//
        }
    })
}






promptManager();