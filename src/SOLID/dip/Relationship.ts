import Person from "./Person";
import {RelationshipTypes} from "./Relationship.types";
import Relation from "./Relation";
import RelationShipBrowser from "./RelationShipBrowser.interface";

/**
 * class - Relationship
 * Low Level Module
 */
export default class Relationship implements RelationShipBrowser {
    private relations:Relation[] = []

    public addParentAndChild(parent: Person, child: Person): void {
        this.relations.push(new Relation(parent, RelationshipTypes.PARENT, child));
        this.relations.push(new Relation(child, RelationshipTypes.CHILD, parent));
    }

    public addSibling(sibling1: Person, sibling2: Person): void {
        this.relations.push(new Relation(sibling1, RelationshipTypes.SIBLING, sibling2));
        this.relations.push(new Relation(sibling2, RelationshipTypes.SIBLING, sibling1));
    }

    public getRelations(): Relation[] {
        return this.relations;
    }

    public findSiblingsOf(name: string): Relation[] {
        return this.relations.filter(relation =>  (relation.relationType === RelationshipTypes.SIBLING
            && relation.first.getName() === name)
        );
    }

    public findAllChildrenOf(name: string): Relation[] {
        return this.relations.filter(
            (relation) => (
                relation.relationType === RelationshipTypes.PARENT &&
                relation.first.getName() === name
            )
        );
    }
}