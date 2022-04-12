// export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
  
  return `
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
Email: 

# Table of Contents:
          
`;
};  