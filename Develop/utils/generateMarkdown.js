
function renderLicenseBadge(data) {
  let licenseBadge = ``;
  let badge = data.license;
  if (badge === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return licenseBadge;
  } else if (badge === "GNU") {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    return licenseBadge;
  } else if (badge === "Apache 2.0") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return licenseBadge;
  } else return licenseBadge;
};

function renderLicenseLink(data) {
  let licenseLink = ``;
  let link = data.license;
  if (link === "MIT") {
    licenseLink = `[The MIT License](https://opensource.org/licenses/MIT)`
    return licenseLink;
  } else if (link === "GNU") {
    licenseLink = `[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0)`
    return licenseLink;
  } else if (link === "Apache 2.0") {
    licenseLink = `[Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0)`
    return licenseLink;
  } else return licenseLink;
};

function renderLicenseSection() { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

${data.description}

  ## Installation

${data.installation}

  ## Usage

${data.usage}

  ## License

${renderLicenseBadge(data)}

  ## Contributors

${data.contributors}

  ## Tests

${data.tests}

  ## Questions

* [Find me on Github](https://github.com/${data.github})
* E-mail me at ${data.email}  

`;
}

module.exports = generateMarkdown;


//  ${renderLicenseSection(data.license)}