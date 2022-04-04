const generatePage = data => {
    return `
    # ${data.title}

    ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Testing](#testing)
    * [Questions](#questions)

    ## Description:
    ${data.description}

    ## Installation:
    ${data.installation}

    ## Usage:
    ${data.usage}

    ## Contribution 
    ${data.contribution}

    ## Testing
    ${data.test}

    ## Questions
    If a user has questions regarding ${data.title}, 
    please send an email to ${data.email}.
    I can also be reached on my GitHub:
    https://github.com/${data.github}

    `;
}


module.exports = generatePage;