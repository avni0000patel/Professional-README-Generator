// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

function renderLicenseBadge(license) {
    if (license === "Academic Free License v3.0") {
        return "![License](https://img.shields.io/badge/License-Academic_Free_License_v3.0-success)";
    } else if (license === "Apache license 2.0") {
        return "![License](https://img.shields.io/badge/License-Apache_license_2.0-success)";
    } else if (license === "Boost Software License 1.0") {
        return "![License](https://img.shields.io/badge/License-Boost_Software_License_1.0-success)";
    } else if (license === "BSD 2-clause Simplified license") {
        return "![License](https://img.shields.io/badge/License-BSD_2--clause_Simplified_license-success)";
    } else if (license === "BSD 3-clause New or Revised license") {
        return "![License](https://img.shields.io/badge/License-BSD_3--clause_New_or_Revised_license-success)";
    } else if (license === "BSD 3-clause Clear license") {
        return "![License](https://img.shields.io/badge/License-BSD_3--clause_Clear_license-success)";
    } else if (license === "Creative Commons license family") {
        return "![License](https://img.shields.io/badge/License-Creative_Commons_license_family-success)";
    } else if (license === "Creative Commons Zero v1.0 Universal") {
        return "![License](https://img.shields.io/badge/License-Creative_Commons_Zero_v1.0_Universal-success)";
    } else if (license === "Creative Commons Attribution 4.0") {
        return "![License](https://img.shields.io/badge/License-Creative_Commons_Attribution_4.0-success)";
    } else if (license === "Creative Commons Attribution Share Alike 4.0") {
        return "![License](https://img.shields.io/badge/License-Creative_Commons_Attribution_Share_Alike_4.0-success)";
    } else if (license === "Do What The F*ck You Want To Public License") {
        return "![License](https://img.shields.io/badge/License-Do_What_The_F*ck_You_Want_To_Public_License-success)";
    } else if (license === "Educational Community License v2.0") {
        return "![License](https://img.shields.io/badge/License-Educational_Community_License_v2.0-success)";
    } else if (license === "Eclipse Public License 1.0") {
        return "![License](https://img.shields.io/badge/License-Eclipse_Public_License_1.0-success)";
    } else if (license === "Eclipse Public License 2.0") {
        return "![License](https://img.shields.io/badge/License-Eclipse_Public_License_2.0-success)";
    } else if (license === "European Union Public License 1.1") {
        return "![License](https://img.shields.io/badge/License-European_Union_Public_License_1.1-success)";
    } else if (license === "GNU Affero General Public License v3.0") {
        return "![License](https://img.shields.io/badge/License-GNU_Affero_General_Public_License_v3.0-success)";
    } else if (license === "GNU General Public License family") {
        return "![License](https://img.shields.io/badge/License-GNU_General_Public_License_family-success)";
    } else if (license === "GNU General Public License v2.0") {
        return "![License](https://img.shields.io/badge/License-GNU_General_Public_License_v2.0-success)";
    } else if (license === "GNU General Public License v3.0") {
        return "![License](https://img.shields.io/badge/License-GNU_General_Public_License_v3.0-success)";
    } else if (license === "GNU Lesser General Public License family") {
        return "![License](https://img.shields.io/badge/License-GNU_Lesser_General_Public_License_family-success)";
    } else if (license === "GNU Lesser General Public License v2.1") {
        return "![License](https://img.shields.io/badge/License-GNU_Lesser_General_Public_License_v2.1-success)";
    } else if (license === "GNU Lesser General Public License v3.0") {
        return "![License](https://img.shields.io/badge/License-GNU_Lesser_General_Public_License_v3.0-success)";
    } else if (license === "ISC") {
        return "![License](https://img.shields.io/badge/License-ISC-success)";
    } else if (license === "LaTeX Project Public License v1.3c") {
        return "![License](https://img.shields.io/badge/License-LaTeX_Project_Public_License_v1.3c-success)";
    } else if (license === "Microsoft Public License") {
        return "![License](https://img.shields.io/badge/License-Microsoft_Public_License-success)";
    } else if (license === "MIT") {
        return "![License](https://img.shields.io/badge/License-MIT-success)";
    } else if (license === "Mozilla Public License 2.0") {
        return "![License](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-success)";
    } else if (license === "Open Software License 3.0") {
        return "![License](https://img.shields.io/badge/License-Open_Software_License_3.0-success)";
    } else if (license === "PostgreSQL License") {
        return "![License](https://img.shields.io/badge/License-PostgreSQL_License-success)";
    } else if (license === "SIL Open Font License 1.1") {
        return "![License](https://img.shields.io/badge/License-SIL_Open_Font_License_1.1-success)";
    } else if (license === "University of Illinois/NCSA Open Source License") {
        return "![License](https://img.shields.io/badge/License-University_of_Illinois%2FNCSA_Open_Source_License-success)";
    } else if (license === "The Unlicense") {
        return "![License](https://img.shields.io/badge/License-The_Unlicense-success)";
    } else if (license === "zLib License") {
        return "![License](https://img.shields.io/badge/License-zLib_License-success)";
    } else {
        return "N/A"
    }
};

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter any usage information.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a choice for a license.",
        choices: [
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2-clause Simplified license",
            "BSD 3-clause New or Revised license",
            "BSD 3-clause Clear license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License",
        ],
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter any contribution guidelines.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any test instructions.",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (error) {
        error ? console.log(error) : console.log("Successful!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            console.log(JSON.stringify(data, null, " "));
            data.renderLicenseBadge = renderLicenseBadge(data.license);
            console.log(data.renderLicenseBadge);
            writeToFile("./README.md", data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
