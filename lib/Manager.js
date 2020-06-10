 // VARIABLE IMPORTING EMPLOYEE MODULE. FOR CONSTRUCTOR ACCESS.
const Employee = require("./Employee");
 // NEW CLASS 'MANAGER' EXTENDING FROM EMPLOYEE CLASS CONSTRUCTOR.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
 // 'SUPER' HOLDS PREVIOUS CLASS ARGUMENTS        
        super(name, id, email);
 // ADDING NEW ARGUMENT TO CONSTRUCTOR       
        this.officeNumber = officeNumber;
    }
 // METHOD USED FROM EMPLOYEE CONSTRUCTOR NOW RETURNING INTERN
    getRole() {
        return "Manager";
    }
 // NEW METHOD ACQUIRING OFFICENUMBER INFO IF 'MANAGER' IS CHOSEN
    getOfficeNumber() {
        return this.officeNumber;
    }
};
// EXPORTING 'MANAGER' MODULE.
module.exports = Manager;