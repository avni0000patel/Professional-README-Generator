// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${data.renderLicenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Here is a link to my GitHub profile: <br/>
  ${data.github} <br/>
  If you have any questions, please reach me at: <br/>
  ${data.email}
`;
}

module.exports = generateMarkdown;
