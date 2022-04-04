const generatePage = data => {
    return `
    #README
    # ${data.title}
    ## License:
    [![license](https://img.shields.io/badge/license-$(data.license)-blue.svg)](https.)

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [More Information](#more-information)

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

    ## More Information
    ${data.email}
    ${data.github}


    `
}


module.exports = generatePage;