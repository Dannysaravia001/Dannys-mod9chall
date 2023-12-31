//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    "Github-license": '![Github license]("http://img.shields.io/badge/license-${data.license}-blue.svg")'
  };
 return licenseBadges[license] || '';

}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  returnLinks[license] || '';
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

 return licenseSection[license] || '';
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Authors](#Authors)
  * [License](#license)

  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Authors
  ${data.name}

  ## License 
  ${data.license}

  
`;
}

module.exports = generateMarkdown;
