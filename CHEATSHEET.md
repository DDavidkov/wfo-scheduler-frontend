# Useful Javascript features for React

## Table of contents

- [Implicit return](#implicit_return)
- [Object Property Value Shorthand](#property_value_shorthand)
- [Shorthand If](#shorthand_if)
- [Using the && operator for conditional rendering](#and_operator)
- [Destructuring](#destructuring)
- [Default values](#default_values)
- [Rest](#rest)
- [Spread](#spread)
- [Computed property names](#computed_names)
- [Async/Await](#async_await)
- [Higher order functions](#hof)
  - [Map](#map)
  - [Filter](#filter)
  - [Reduce](#reduce)

<a name="implicit_return"> </a>

## Implicit return

It is valid to not have curly braces around a function if it has a single statement and the function will return the result of that statement:

```javascript
const sum = (a, b) => a + b;
```

Which is the same as writing:

```javascript
const sum = (a, b) => {
  return a + b;
};
```

Note that if you return an object, that you create using object initializer (curly braces), you need to wrap it in brackets:

```javascript
const sum = (a, b) => ({ sum: a + b });
```

The equivalent statement would be:

```javascript
const sum = (a, b) => {
  return { sum: a + b };
};
```

<a name="property_value_shorthand"> </a>

## Object Property Value Shorthand

When creating an object, if a property name is the same as the variable you want to assign it to, you can simply use the property name once and it will be equivalent to specifying the property name and assigning it to the variable:

```javascript
const name = "John Doe";

const person = { name };
```

This is equivalent to:

```javascript
const name = "John Doe";

const person = { name: name };
```

<a name="shorthand_if"></a>

## Shorthand If

You can use the ? and the : operators to do a more concise if statement:

```javascript
const variable = condition ? firstOutcome : secondOutcome;
```

This is equivalent to:

```javascript
let variable;

if (condition) {
  variable = firstOutcome;
} else {
  variable = secondOutcome;
}
```

These can also be nested, but be careful, because you start to lose readability:

```javascript
const variable = firstCondition
  ? firstOutcome
  : secondCondition
  ? secondOutcome
  : thirdOutcome;
```

Which is equivalent to:

```javascript
let variable;

if (firstCondition) {
  variable = firstOutcome;
} else if (secondCondition) {
  variable = secondOutcome;
} else {
  variable = thirdOutcome;
}
```

<a name="and_operator"> </a>

## Using the && operator for conditional rendering

The && operator has a "short-circuit" behavior, which means that it will simply return the result of the first operation if it is "falsy". This is useful with conjunction of the fact that React won't render most "falsy" values (with the notable exception of "0"):

```javascript
myCondition && <h1>I won't be rendered if "myCondition" is falsy</h1>;
```

<a name="destructuring"></a>

## Destructuring

You can get directly the properties of an object by specifying their names inside curly braces:

```javascript
const { prop1, prop2 } = obj;
```

You can also do that to function arguments (and this also can be done to the props in a functional component):

```javascript
const myFunctionalComponent = ({ prop1, prop2 }) => (
  <div>
    <p>This is prop1: {prop1}</p>
    <p>And this is prop2: {prop2}</p>
  </div>
);
```

Similarly you can destructure arrays:

```javascript
const [firstObject, secondObject] = myArray;
```

<a name="default_values"></a>

## Default values

You can give default values for function parameters:

```javascript
const getIndex = (obj, array = []) => array.indexOf(obj);
```

This applies to desturctured arguments as well:

```javascript
const getIndex = ({ array = [], obj }) => array.indexOf(obj);
```

<a name="rest"></a>

## Rest

You can use ... operator in conjunction with destructuring to get the rest of the properties of an object or array:

```javascript
const { prop1, prop2, ...rest } = obj;

const [firstObject, secondObject, ...rest] = array;
```

You can also get the rest of the arguments of a function:

```javascript
const myFunction = (arg1, arg2, ...rest) => {
  console.log(rest);
};
```

You can also get all arguments this way:

```javascript
const myFunction = (...args) => {
  console.log("These are all the arguments:");
  console.log(args);
};
```

<a name="spread"></a>

## Spread

You can also use ... to "spread" and array and pass all it's elements to a function:

```javascript
const dateFields = [1970, 0, 1];
const d = new Date(...dateFields);
```

Also you can combine arrays this way, as well:

```javascript
const newArray = [...array1, ...array2];
```

Another thing you can do with the spread operator is to use for object creation. The new object will have the same fields as the "spread" object and you can define additional properties to it:

```javascript
const firstObject = { propertyName: "First property" };

const secondObject = { ...firstObject, anotherProperty: "Second property" };
```

<a name="computed_names"></a>

## Computed property names

You can use variable values to create objects dynamically:

```javascript
const propName = "MyName";

const obj = { [propName]: "MyName field has this value" };
```

<a name="async_await"></a>

## Async/Await

You can use await inside async functions to wait for the execution of promises:

```javascript
const makeGetRequest = async url => {
  const res = await fetch(url);
  const json = await res.json();

  return json;
};
```

<a name="hof"></a>

## Higher order functions

There are several array functions that accept other a functions as their input that have been added semi-recently to JavaScript. Note that they all do not modify the array on which they are called.

<a name="map"></a>

### Map

Map goes through all items in the array and applies the passed function to each of them:

```javascript
const double = numbers => numbers.map(number => number * 2);
```

<a name="filter"></a>

### Filter

Filter calls the passed function on each item and keeps the item in the result only if the returned value from the function call is "truthy":

```javascript
const filterSmallNumbers = numbers => number.filter(number => number > 1000000);
```

<a name="reduce"></a>

### Reduce

Reduce starts from an initial value (which is the second argument it accepts) and then applies the passed function to each element accumulating an end result:

```javascript
const multiply = (...args) => args.reduce((acc, curr) => acc * curr, 1);
```

If we don't provide an initial value, the first value in the array will be used as such:

```javascript
const sum = (...args) => args.reduce((acc, curr) => acc + curr);
```
