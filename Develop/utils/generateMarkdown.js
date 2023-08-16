//This fucntion is used to display a license badge on README.md depending on userinput from prompt
function renderLicenseBadge(license) {
  if (license === 'mit') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'apache-2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'gpl-3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'none') {
    return "No license were used";
  }
}


// This function was not needed
function renderLicenseLink(license) { }

// This function was no needed
function renderLicenseSection(license) { }

// This function is used to generate markdown for README using data from index.js
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  
  ${data.description}

 ## Table of Contents
 - [Description](#description)
 - [License](#license)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributions/Resources](#contributions)
 - [Testing](#testing)
 - [Questions](#questions)

 ## License
${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Contributions
 
 ${data.contribution}

 ## Testing
 ${data.test}

 ## Questions

 If you have any questions feel free to visit my [GitHub](https://github.com/${data.githubUser}) or [Email](mailto:${data.email}) me!

`
}

module.exports = generateMarkdown;
