const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const teamMembers = [];

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
        teamMembers.push(newManager);
        menu();
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
                inquirer.prompt(
                    [
                        {
                            type: 'input',
                            message: "What is the intern's name?",
                            name: 'name'
                        },
                        {
                            type: 'input',
                            message: "What is the intern's id?",
                            name: 'id'
                        },
                        {
                            type: 'input',
                            message: "What is the intern's email?",
                            name: 'email'
                        },
                        {
                            type: 'input',
                            message: 'Where does the intern go to school?',
                            name: 'school'
                        }
                    ]
                )
                .then(function(answers) {
                    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
                    teamMembers.push(newIntern);
                    menu();
                })
                break;
            case "Engineer":
                //engineerPrompt()//
                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is the engineer's name?",
                        name: 'name'
                    },
                    {
                        type: 'id',
                        message: "What is the engineer's id?",
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: "What is the engineer's email?",
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: "What is the engineer's github profile username?",
                        name: 'github'
                    }
                ])
                .then(function(answers) {
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    teamMembers.push(newEngineer);
                    menu();
                })
                break;
            default: 
            generateHTML(teamMembers);
        }
    })
}

promptManager();