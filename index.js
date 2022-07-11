const inquirer = require('inquirer');

const promptApp = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the Managers name?'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the Managers ID number?'
        },
        {
            type: 'input',
            name: 'manager-email',
            message: 'What is the Managers email?'
        },
        {
            type: 'input',
            name: 'manager-office',
            message: 'What is the Managers office number?'
        },
        {
            type: 'confirm',
            name: 'confirmEmployees',
            message: 'Would you like to add another worker to this list?',
            default: true
        },

        //maybe send to new set inquirer question here if true

    ])
};

promptApp();