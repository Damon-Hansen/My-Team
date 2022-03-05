const Employee = require("../lib/Employee")


describe('the employee class properties and methods', () => {
    const employee = new Employee('Joe', '1', 'joe@gmail.com');


    it('creates the class of employee', () => {

        expect(employee).toHaveProperty('name', 'Joe');
        expect(employee).toHaveProperty('id', '1');
        expect(employee).toHaveProperty('email', 'joe@gmail.com');
    });
    
    it('gets the name of employee', () => {
    
        expect(employee.getName()).toEqual('Joe')        
    });

    it('gets the id of employee', () => {
    
        expect(employee.getId()).toEqual('1')
        expect(typeof employee.getId()).toEqual('string')             
    });

    it('gets the email of employee', () => {
    
        expect(employee.getEmail()).toEqual('joe@gmail.com')        
    });

    it('gets the role of employee', () => {
    
        expect(employee.getRole()).toEqual('Employee')        
    });
    

});


