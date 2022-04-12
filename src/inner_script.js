// export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    # ${header.name}

    # Description:
    ${projects.description}

    # Installation:
    ${header.installation}

    # Usage:

    # Contributing:

    # Tests:

    # Questions:
    My GitHub: https://github.com/${header.github}
    My Email: 

    # Table of Contents:
          
    `;
  };  