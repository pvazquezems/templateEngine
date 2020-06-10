 // VARIABLE IMPORTING EMPLOYEE MODULE. FOR CONSTRUCTOR ACCESS.
const Employee = require("./Employee.js");
 // NEW CLASS 'INTERN' EXTENDING FROM EMPLOYEE CLASS CONSTRUCTOR.
class Intern extends Employee {
    constructor(name, id, email, school) {
 // 'SUPER' HOLDS PREVIOUS CLASS ARGUMENTS        
        super(name, id, email);
 // ADDING NEW ARGUMENT TO CONSTRUCTOR       
        this.school = school;
    }
 // METHOD USED FROM EMPLOYEE CONSTRUCTOR NOW RETURNING INTERN.
    getRole() {
        return "Intern";
    }
 // NEW METHOD ACQUIRING SCHOOL INFO IF INTERN IS CHOSEN. 
 getSchool() {
    return this.school;
}
};
 // EXPORTING INTERN MODULE
module.exports = Intern;