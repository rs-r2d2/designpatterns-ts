### (I)nterface Segregation Principle

* Don't put too much into an interface; 
split into separate interfaces.

In example,

> Printer interface breaks, it by implementing 
> printing, scanning, and faxing in the single
> interface. If we just want a scanner implementation,
> we will need to stub scanning and faxing methods 
> implementation.

> This is solved by segregating into each implementation.
> We can now have implementation of printer, scanner, 
> fax machine or combination of any.