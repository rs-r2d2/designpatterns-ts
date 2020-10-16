import Person from "./Person";
import {RelationshipTypes} from "./Relationship.types";

 export default class Relation {
    constructor(public first: Person, public relationType: RelationshipTypes, public second: Person) {}
}