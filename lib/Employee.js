 // BELOW IS THE EMPLOYEE CLASS CONSTRUCTOR.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
 // METHODS THAT RETURN NAME, ID, AND EMAIL.    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
 // METHOD THAT GETS ROLE FROM USER INPUT.
    getRole() {
        return "Employee";
    }
};
 // EXPORTING MODULE
module.exports = Employee;
