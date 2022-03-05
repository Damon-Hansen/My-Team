const Intern = require('../lib/Intern')

describe('the intern class properties and methods', () => {
    const intern = new Intern('Joe', '1', 'joe@gmail.com', 'KU');

    it('gets the school of the intern', () => {

        expect(intern.getSchool()).toEqual('KU')
    });

    it('gets the role of the intern', () => {
        expect(intern.getRole()).toEqual('Intern')
    });
})