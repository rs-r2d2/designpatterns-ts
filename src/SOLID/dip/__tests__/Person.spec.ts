import Person from "../Person";
import {expect} from 'chai';

describe("Dependency Inversion Principle", () => {
    describe("Person Class", () => {
        it("can be instantiate, gets name", () => {
            const person = new Person('John');
            expect(person).to.be.instanceOf(Person);
            expect(person.getName()).to.be.a('string').to.be.equal('John');
            const emptyPerson = new Person('');
            expect(emptyPerson).to.be.instanceOf(Person);
            expect(emptyPerson.getName()).to.be.a('string').to.be.empty;
        });
    });
});