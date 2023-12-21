// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'projectTitle',
          message: 'What is the title of your project?'
        },
        {
         type: 'input',
         name: 'projectDescription',
         message: "Provide a description of your project:"
        },
        {
            type: 'input',
            name: 'projectTime',
            message: "How long will the project take to complete?"
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Successfully wrote to ${fileName}`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `# ${answers.projectTitle}\n # ${answers.projectDescription}\n${answers.projectTime}\n`;
        writeToFile('./README-Generator/README.md', readmeContent);
    });
  }
// Function call to initialize app
init();
