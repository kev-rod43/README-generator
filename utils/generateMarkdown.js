// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ""
  }
  let licenseArr = license.split('')

  //encodes license name so that it can be used within an url
  licenseArr.forEach((letter, letterIndex) => {
    if (letter == "-"){
      licenseArr[letterIndex] = "_";
    }
  });

  let encodedLicense = licenseArr.join("")

  return  `[![License](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)](https://opensource.org/licenses/${license})
  `;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ?
   `https://opensource.org/license/${license}/
  ` : "";
}

// If there is no license, return an empty string
function renderLicenseSection(license,title) {
  return license ?
    `## License

  ${title} is available under the ${license} license.
  For more information on the license, visit this [link](${renderLicenseLink(license)})
  `
    : "";
}

function generateMarkdown(data) {
  return  `${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license, data.title)}
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For any questions, feel free to contact me through either of these options: 
  
  -[Github](https://github.com/${data.githubUsername})
  
  -Email: ${data.email}
`;
}

module.exports = generateMarkdown;
