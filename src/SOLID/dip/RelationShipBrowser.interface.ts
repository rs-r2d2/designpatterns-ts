import Relation from "./Relation";

export default interface RelationShipBrowser {
    findAllChildrenOf(name: string) : Relation[]
    findSiblingsOf(name: string): Relation[]
}

