var Task = require("Task");

var data = [
    {
        name: "colors",
        values: ["red", "green", "blue"]
    },
    {
        name: "nothing",
        values: []
    },
    {
        name: "numbers",
        values: ["one", "two", "three", "four"]
    }
];

Task.ForEach(data, function (flow, item) {
    flow.suspend();
    console.log(item.name + ":");
    Task.ForEach(item.values, function (flow, value) {
        flow.suspend();
        console.log("-" + value);
        setTimeout(function () { flow.resume(); }, 10);
    }).then(function () {
        flow.resume();
    }).start();
}).start();