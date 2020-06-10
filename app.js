const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
 // QUESTIONS ARRAY TO BE PROMPTED.
const questions = [
    {
        type: "input",
        message: "Please enter your name.",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your ID number.",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    },
    {
        type: "list",
        message: "Please select your role.",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    }
];
 // VARIABLES THAT HOLD EXTRA QUESTIONS DEPENDING ON USER SELECTION. (LINES 38-58)
const managerQuestions = {
    type: "input",
    message: "Please enter manager office number.",
    name: "office"
};
const engineerQuestions = {
    type: "input",
    message: "Please enter Github username.",
    name: "gitHub"
};
const internQuestions = {
    type: "input",
    message: "Please enter school affiliation.",
    name: "school"
};
const restartPrompts = {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["NO", "YES"],
    name: "restart"
};
 // ARRAY HOLDING USER INPUTS
let array = [];
 // ASYNC FUNCTION THAT PROMPTS QUESTIONS TO USER. 
async function promptQuestions() {
 // VARIABLE THAT TAKES IN USER RESPONSE FROM PROMPTS, THEN DECONSTRUCTING INTO OBJECT
    const userResponse = await inquirer.prompt(questions);
    const { name, id, email, role } = userResponse;
 // CONDITIONAL STATEMENTS HOLDING SPECIFIC QUESTIONS DEPENDING ON USER SELECTION.(MANAGER)
    if (role === "Manager") {
        const officeInput = await inquirer.prompt(managerQuestions);
        const officeNumber = officeInput.office
        const employee = new Manager(name, id, email, officeNumber);
        array.push(employee);
 // CONDITIONAL STATEMENT HOLDING SPECIFIC QUESTIONS DEPENDING ON USER SELECTION.(ENGINEER)       
    } else if (role === "Engineer") {
        const gitInput = await inquirer.prompt(engineerQuestions);
        const github = gitInput.gitHub
        const employee = new Engineer(name, id, email, github);
        array.push(employee);
 // CONDITIONAL STATEMENT HOLDING SPECIFIC QUESTIONS DEPENDING ON USER SELECTION.(INTERN)   
    } else if (role === "Intern") {
        const schoolInput = await inquirer.prompt(internQuestions);
        const school = schoolInput.school
        const employee = new Intern(name, id, email, school);
        array.push(employee);
    };
 // FINAL QUESTION THAT GETS PROMPTED AND DETERMINES IF MORE INFO WILL BE PASSED OR INFO TO BE RENDERED
    const restartInput = await inquirer.prompt(restartPrompts);
    const { restart } = restartInput;
    if (restart === "YES") {
        promptQuestions();
    } else {
        const renderInfo = render(array);
 // WRITING RENDERED INFO FROM USER INPUTS INTO TEAM.HTML VIA OUTPUTPATH.
        fs.writeFile(outputPath, renderInfo, function(err){
            if(err) 
                throw err;
        });
    }
}
// CALLING FUNCTION THAT PROMPTS USER ALL THE QUESTIONS.  
promptQuestions();