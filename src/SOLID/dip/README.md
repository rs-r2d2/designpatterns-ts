### Dependency Inversion Principle
* Higher level module should not depend on lower level module.
instead, they should use abstraction.
* Abstraction should not depend upon on details.
Details should depend on abstraction.

In our example
> Research is a higher level modules, since 
> it works on lower level module Relationship.
> oldResearch method violates 
> Dependency Inversion Principle
> by making High Level module (Research), 
> dependent on Lower module (Relationship).

> It can be resolved by using abstraction,
> newResearch method  makes High Level module (Research), 
> independent of Lower module (Relationship) 
> by using abstraction (RelationShipBrowser Interface).
> Details are dependent on Abstraction.