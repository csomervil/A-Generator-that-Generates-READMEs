// export function to generate entire page
  module.exports = templateData => {

  return `

[![Generic badge](https://img.shields.io/badge/${templateData.badge}-License-blue.svg)](https://shields.io/)

# ${templateData.name}

# Description:
${templateData.description}

# Installation:
${templateData.installation}

# Usage:
${templateData.usage}

# Contributing:
${templateData.contributing}

# Tests:
${templateData.tests}

# Questions:
GitHub: https://github.com/${templateData.github}
Email: ${templateData.email}

# Table of Contents:
          
`;
};  