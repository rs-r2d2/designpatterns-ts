import Relationship from "./Relationship";
import Relation from "./Relation";
import {RelationshipTypes} from "./Relationship.types";
import RelationShipBrowser from "./RelationShipBrowser.interface";

/**
 * class - Research
 * High level Module
 */
export default class Research {

    /**
     * Makes High Level module (Research), dependent on Lower module (Relation)
     * Since, it uses functions from relations module.
     *
     * @param relationships - Relationships on which to research
     */
    public  oldResearch(relationships: Relationship): void {
        const relations: Relation[] = relationships.getRelations();
        relations.filter((relation)=> relation.relationType === RelationshipTypes.PARENT && relation.first.getName() === 'John')
            .forEach((relation)=>{
                console.log(`John is a child of ${relation.second.getName()}`)
            });
    }

    /**
     *
     * Makes High Level module (Research), independent of Lower module (Relation),
     * Since, it does not use function from lower level module.
     * Instead use abstraction.
     * Details are dependent on Abstraction. (RelationShipBrowser Interface)
     * @param browser - What research should be done.
     */
    public newResearch(browser: RelationShipBrowser): void {
        const relations: Relation[] = browser.findAllChildrenOf('John');
        relations.forEach((relation)=>{
            console.log(`John is a child of ${relation.second.getName()}`)
        });
    }
}