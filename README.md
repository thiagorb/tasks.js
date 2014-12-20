tasks.js
========

JavaScript library for asynchronous tasks.

This library is intended to simplify working with asynchronous tasks in JavaScript. It was firstly written to work in browser-side, and then rewritten to be used as a node.js module. It is still possible to use in a browser-side environment though, with some possible adjustments.

The library makes possible to write the code following the execution order flow. For example, you can write a task, that may (or may not) be executed asynchronously, and, using the method 'then', write another function that should be executed after the first one. Example:
```JavaScript
var Task = require("Task");

new Task(function () {
    console.log("first");
}).then(function () {
    console.log("second");
}).start();
// Output:
// first
// second
```

There are some control flow helpers, that can be used for simulating loops. These control flows can be nested, and this makes the code very flexible.

Task.If(condition, blockTrue, blockFalse): represents a task that uses the function 'condition' and determines wheter blockTrue of blockFalse should be executed.

Task.While(condition, iteration): represents a while block.

Task.For(condition, increment, iteration): similar to C for block. There is no initialization, so if you want to use an increment variable, you should declare it in the context of the task.

Task.ForRange(start, end, iteration): represents a block that iterates from 'start' till 'end' (inclusive).

Task.ForEach(array, iteration): represents a block that iterate over an array-like object.

### Testing
Run the run_tests.sh script file.
