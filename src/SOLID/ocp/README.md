### (O)pen closed Principle

* Class implementation should be open for extension, 
but closed for modification

In example,

> ProductFilter implementation violates 
> Open Closed Principle, class is not open for extension.
> To add a new filter, you will need 
> to modify the implementation. 
> Thus, violating the principle.

> BetterFilter implementation solves this problem, 
> by allowing the filter to be passed as argument. 
> Thus, it is open for extension.
> To add a new filter you will no longer need to
> to modify the implementation.