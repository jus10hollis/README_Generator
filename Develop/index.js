// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the project title",
    name: "title",
  },
  {
    type: "input",
    message: "Describe what the app is for. What does it do?",
    name: "description",
  },
  {
    type: "input",
    message: "Provide a table of contents",
    name: "table",
  },
  {
    type: "input",
    message: "Describe how to install the app.",
    name: "installation",
  },
  {
    type: "input",
    message: "Describe how to use the app.",
    name: "usage",
  },
  {
    type: "list",
    choices: ["Open Source","Public Domain", "Restrictive", "Permissive", "Proprietary"],
    message: "License",
    name: "license",
  },
  {
    type: "input",
    message: "Describe how to make contributions",
    name: "contributions",
  },
  {
    type: "input",
    message: "Describe any tests",
    name: "tests",
  },
  { type: "input", message: "Questions?", name: "questions" },
];

// inquirer.prompt for setting up command-line interface prompts
inquirer
  .prompt(questions)
  .then((response) => {
    fs.writeFile(
      "ReadME.md",
      `# ${response.title}  
      ## Description  
      ${response.description} 
      ## Table of Contents  
      ${response.table}  
      ## Installation 
      ${response.installation}  
      ## Usage  
      ${response.usage}  
      ## License  
      ${response.license}  
      ## Contributing  
      ${response.contributions}  
      ## Tests  
      ${response.tests}  
      ## Questions
      ${response.questions}`,
      (err) =>
        err ? console.error(err) : console.log("The ReadME.md has been created!")
    );
  });
