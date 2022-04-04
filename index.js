const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/readme-template');

console.log(inquirer)

console.log(`
=====================
Create a README file
=====================

Please answer the following
questions to generate your
project's ReadMe file
`);

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines for your project (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please enter contribution guidelines!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your project (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter test instructions!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license applies to your project?',
        choices: ['MIT', 'GNU']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      
     
    ]);
  };

  promptUser()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return fs.writeFile('README.md', data, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Your README has been successfully created!')
            }
        });
    })
    .catch(err => {
        console.log(err)
    })
  
