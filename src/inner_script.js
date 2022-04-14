// Using Large String with Prompt Values to Generate Page
  module.exports = templateData => {

  return ` # ${templateData.title}

[![Generic badge](https://img.shields.io/badge/${templateData.badge}-License-${templateData.colour}.svg)](https://shields.io/)

# Description:
${templateData.description}

# Table of Contents:

[Title](#${templateData.title})

[Installation](#Installation)

[Description](#Description)

[Usage](#Usage)

[Questions](#Questions)

# Installation:
${templateData.installation}

# Usage:
${templateData.usage}

# License:
${templateData.license}

# Contributing:
${templateData.contributing}

# Tests:
${templateData.tests}

# Questions:
GitHub: https://github.com/${templateData.github}
Email: <${templateData.email}>


`;
};  