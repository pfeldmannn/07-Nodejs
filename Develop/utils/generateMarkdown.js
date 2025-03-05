// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const GNUAGPLv3 = 'GNU AGPLv3';
  const GNUGPLv3 = 'GNU GPLv3';
  const GNULGPLv3 = 'GNU LGPLv3';
  const mozillaPublicLicense2 = 'Mozilla Public License 2.0';
  const apacheLicense2 = 'Apache License 2.0';
  const MITLicense = 'MIT License';
  const boostSoftwareLicense1 = 'Boost Software License 1.0';
  const theUnlicense = 'The Unlicense';

  switch (license) {
    case GNUAGPLv3:
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    case GNUGPLv3:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    case GNULGPLv3:
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPLv3-blue.svg)]`
    case mozillaPublicLicense2:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    case apacheLicense2:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    case MITLicense:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    case boostSoftwareLicense1:
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    case theUnlicense:
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    default:
      return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'GNU LGPLv3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'The Unlicense':
      return 'https://choosealicense.com/licenses/unlicense/';
    default:
      return '';
}};
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `##License
    ${data.license}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.entitledDescription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Credits

  ##License
  ${data.license}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}`

}

export default generateMarkdown;
