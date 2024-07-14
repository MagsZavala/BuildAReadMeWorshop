// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === 'None') {
      return '';
    }
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  
  // Function that returns the license link
  function renderLicenseLink(license) {
    if (license === 'None') {
      return '';
    }
    return `\n* [License](#license)\n`;
  }
  
  // Function that returns the license section of README
  function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    }
    return `## License
  
  This project is licensed under the ${license} license.`;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
  
  ${renderLicenseSection(data.license)}
  `;
  }
  
  module.exports = generateMarkdown;
  