import Person from "./Person";
import Relationship from "./Relationship";
import Research from "./Research";

export default async () => {
    const john = new Person('John');
    const chris = new Person('Chris');
    const matt = new Person('Mat');
    const pat = new Person('Pat');
    const martha = new Person('martha');
    const relationships: Relationship = new Relationship();
    relationships.addParentAndChild(john, chris);
    relationships.addParentAndChild(john, matt);
    relationships.addParentAndChild(pat, martha);
    const research: Research = new Research();
    console.log('Using Bad Implementation');
    research.oldResearch(relationships);
    console.log('Using Correct Implementation based on Dependency Inversion Principle');
    research.newResearch(relationships);
}