 // VARIABLE IMPORTING EMPLOYEE MODULE. FOR CONSTRUCTOR ACCESS.
const Employee = require("./Employee.js");
 // NEW CLASS 'ENGINEER' EXTENDING FROM EMPLOYEE CLASS.
class Engineer extends Employee {
    constructor(name, id, email, github) {
 // 'SUPER' HOLDS PREVIOUS CLASS ARGUMENTS       
        super(name, id, email);
 // ADDING NEW ARGUMENT TO CONSTRUCTOR       
        this.github = github;
    }
 // METHOD RETURNING GITHUB INFO 
    getGithub() {
        return this.github;
    }
 // METHOD USED FROM EMPLOYEE CONSTRUCTOR NOW RETURNING ENGINEER.
    getRole() {
        return "Engineer";
    }
};
 // EXPORTING ENGINEER MODULE TO BE USED FOR OTHER CLASSES. 
module.exports = Engineer;
