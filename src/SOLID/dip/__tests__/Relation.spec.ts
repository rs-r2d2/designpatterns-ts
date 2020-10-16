import Person from "../Person";
import {expect} from 'chai';
import Relation from "../Relation";
import {RelationshipTypes} from "../Relationship.types";

describe("Dependency Inversion Principle", () => {
    describe("Relation Class", () => {
        it("can define relations", () => {
            const john = new Person('John');
            const chris = new Person('Chris');
            expect(john).to.be.instanceOf(Person);
            expect(john.getName()).to.be.a('string').to.be.equal('John');
            expect(chris).to.be.instanceOf(Person);
            expect(chris.getName()).to.be.a('string').to.be.equal('Chris');
            const relation = new Relation(john, RelationshipTypes.PARENT, chris);
            expect(relation).to.be.instanceOf(Relation);
            expect(relation.first).to.be.instanceOf(Person);
            expect(relation.first.getName()).to.be.a('string').to.be.equal('John');
            expect(relation.relationType).to.be.a('number').to.equal(RelationshipTypes.PARENT);
            expect(relation.second).to.be.instanceOf(Person);
            expect(relation.first.getName()).to.be.a('string').to.be.equal('John');
        });
    });
});