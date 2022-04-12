const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/inner_script');

const promptUser = () => {
  console.log("You will be asked a series of questions to generate your README");
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What Should the Title be? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Input Required.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('You Must Enter a GitHub user.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide an Installation Guide (Required)',
      validate: installationinput => {
        if (installationinput) {
          return true;
        } else {
          console.log('Input Required.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a General description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Input Required');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide a Guide on the Usage of your Application (Optional)',
      default: "No current guide"
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who is Contributing to the Repository? (Required)',
      validate: contributinginput => {
        if (contributinginput) {
          return true;
        } else {
          console.log('Input Required');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Any Tests that You Have Done? (Optional)',
      default: "Tests have yet to be conducted."
    },
    
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What lliscences are you using? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
  
  ]);
};

promptUser()
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./Yours.md', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });
