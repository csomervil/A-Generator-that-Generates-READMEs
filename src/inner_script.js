// export function to generate entire page
  module.exports = templateData => {

  return `

[![Generic badge](https://img.shields.io/badge/${templateData.badge}-License-${templateData.colour}.svg)](https://shields.io/)

# ${templateData.title}

# Description:
${templateData.description}

# Installation:
${templateData.installation}

# Usage:
${templateData.usage}

# Contributing:
${templateData.contributing}

#Tests:
${templateData.tests}

# License:
${templateData.license}


# Questions:
GitHub: https://github.com/${templateData.github}
Email: <${templateData.email}>

# Table of Contents:

[Title](#${templateData.title})

[Installation](#Installation)

[Description](#Description)

[Usage](#Usage)

[Questions](#Questions)
`;
};  