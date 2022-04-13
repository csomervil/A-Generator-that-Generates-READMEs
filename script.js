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
      name: 'email',
      message: 'Enter your Email So People can Contact you (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You Must Enter an Email.');
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
      type: 'list',
      name: 'badge',
      message: 'What lliscence are you using? (Check all that apply)',
      choices: ['None', 'Apache_2.0', 'GNU_General_Public_v3.0', 'MIT',
      'BSD_2-Clause_"Simplified"',
      'BSD_3-Clause_"New"_or_"Revised"',
      'Boost_Software_1.0',
      'Creative_Commons_Zero_v1.0_Universal',
      'Eclipse_Public_2.0',
      'GNU_Affero_General_Public_v3.0',
      'GNU_General_Public_v2.0',
      'GNU_Lesser_General_Public_v2.1',
      'Mozilla_Public_2.0',
      'The_Unlicense']
    },
  
  ]);
};

promptUser()
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./Yours.md', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('README created! Check out Yours.md in this directory to see it!');
    });
  });
