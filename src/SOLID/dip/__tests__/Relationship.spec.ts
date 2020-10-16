import Person from "../Person";
import {expect} from 'chai';
import Relationship from "../Relationship";

describe("Dependency Inversion Principle", () => {
    describe("Relationship Class", () => {
        it("can define parent child relationship", () => {
            const john = new Person('John');
            expect(john).to.be.instanceOf(Person);
            expect(john.getName()).to.be.a('string').to.be.equal('John');
            const chris = new Person('Chris');
            expect(chris).to.be.instanceOf(Person);
            expect(chris.getName()).to.be.a('string').to.be.equal('Chris');
            const relation = new Relationship();
            relation.addParentAndChild(john, chris);
            expect(relation.findAllChildrenOf(john.getName())).to.be.an('array').to.have.length(1);
            expect(relation.findAllChildrenOf(john.getName())[0].second).to.be.instanceOf(Person).to.be.equal(chris);
        });

        it("can define siblings relationship", () => {
            const john = new Person('John');
            expect(john).to.be.instanceOf(Person);
            expect(john.getName()).to.be.a('string').to.be.equal('John');
            const chris = new Person('Chris');
            expect(chris).to.be.instanceOf(Person);
            expect(chris.getName()).to.be.a('string').to.be.equal('Chris');
            const relation = new Relationship();
            relation.addSibling(john, chris);
            expect(relation.findSiblingsOf(john.getName())).to.be.an('array').to.have.length(1);
            expect(relation.findSiblingsOf(john.getName())[0].second).to.be.instanceOf(Person).to.be.equal(chris);
            expect(relation.findSiblingsOf(chris.getName())).to.be.an('array').to.have.length(1);
            expect(relation.findSiblingsOf(chris.getName())[0].second).to.be.instanceOf(Person).to.be.equal(john);
        });
    });
});