const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

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
      validate: descriptionInput => {
        if (descriptionInput) {
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
    // {
    //   type: 'confirm',
    //   name: 'confirmAbout',
    //   message: 'Would you like to enter some information about yourself for an "About" section?',
    //   default: true
    // },
    // {
    //   type: 'input',
    //   name: 'about',
    //   message: 'Provide some information about yourself:',
    //   when: ({ confirmAbout }) => confirmAbout
    // }
  ]);
};

const promptProject = portfolioData => {

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
     
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What lliscences are you using? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./Yours.md', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });
