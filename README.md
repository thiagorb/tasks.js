tasks.js
========

JavaScript library for asynchronous tasks.

This library is intended to simplify working with asynchronous tasks in JavaScript. It was firstly written to work in browser-side, and then rewritten to be used as a node.js module. It is still possible to use in a browser-side environment though, with some possible adjustments.

The library makes possible to write the code following the execution order flow. For example, you can write a task, that may (or may not) be executed asynchronously, and, using the method 'then', write another function that should be executed after the first one. Example:
```
new Task(function () {
    console.log("first");
}).then(function () {
    console.log("second");
}).start();
// Output:
// first
// second
```
