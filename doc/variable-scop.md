
## Variable Scope in PHP
### Local Scope
A variable declared inside a function has a local scope and can only be accessed within that function.

```php
<?php
function localScopeExample() {
    $localVar = "I am local";
    echo $localVar; // Accessible here
}

localScopeExample();
// echo $localVar; // Error: Undefined variable
?>
```
###  Global Scope
A variable declared outside a function has a global scope and can only be accessed outside of functions. To use it inside a function, the global keyword must be used.
```php
<?php
$globalVar = "I am global";

function globalScopeExample() {
    global $globalVar; // Accessing global variable
    echo $globalVar;
}

globalScopeExample();
?>
```
### Static Scope
A variable declared as static retains its value across multiple function calls.

```php
<?php
function staticScopeExample() {
    static $counter = 0; // Static variable
    $counter++;
    echo $counter . "\n";
}

staticScopeExample(); // Outputs: 1
staticScopeExample(); // Outputs: 2
staticScopeExample(); // Outputs: 3
?>
```