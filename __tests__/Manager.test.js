const Manager = require('../lib/Manager');

describe('the manager class properties and methods', () => {
    const manager = new Manager('Joe', '1', 'joe@gmail.com', '100');

    it('gets the office number from the manager', () => {
        expect(manager.getOfficeNumber()).toEqual('100');
    });

    it('gets the role of the manager', () => {
        expect(manager.getRole()).toEqual('Manager');
    });
});