const Engineer = require('../lib/Engineer');

describe('the engineer class properties and methods', () => {
    const engineer = new Engineer('Joe', '1', 'joe@gmail.com', 'Damon-Hansen');

    it('gets the github username of engineer', () => {

        expect(engineer.getGithub()).toEqual('Damon-Hansen')
    });

    it('gets the role of the employee', () => {

        expect(engineer.getRole()).toEqual('Engineer')
    });
});

