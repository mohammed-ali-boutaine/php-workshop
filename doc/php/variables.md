# Variables and Data Types in PHP

## Creating and Outputting Variables

In PHP, a variable starts with a `$` sign, followed by the name of the variable.

```php
<?php
// Creating variables
$name = "John";          // String
$age = 25;               // Integer
$height = 5.9;           // Float
$isStudent = true;       // Boolean
$colors = array("red", "blue", "green"); // Array

// Output variables
echo "Name: $name\n";
echo "Age: $age\n";
echo "Height: $height\n";
echo "Is Student: " . ($isStudent ? 'Yes' : 'No') . "\n";

// Getting the Data Type

var_dump($name);
var_dump($age);
var_dump($height);
var_dump($isStudent);
var_dump($colors);
?>

```
You can get the data type of any object by using the ```var_dump()``` function.


## PHP Data Types
- **String**: Sequence of characters, e.g., "Hello".
- **Integer**: Whole numbers, e.g., 25.
- **Float**: Decimal numbers, e.g., 5.9.
- **Boolean**: true or false.
- **Array**: Collection of values, e.g., ["red", "blue"].
- **Object**: Instances of a class.
- **NULL**: Represents a variable with no value.
- **Resource**: Special types representing references to external resources like database connections.
