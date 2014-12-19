var Task = require("Task");

new Task(function () {
    console.log("a");
}).then(function (flow) {
    flow.suspend();
    console.log("b");
    setTimeout(function () { flow.resume(); }, 10);
}).then(
    Task.Closure(function () {
        var i = 0;
        return Task.For(
            function () { return i < 3; }, 
            function () { i++; },
            Task.Closure(function () {
                var j = 0;
                return Task.For(
                    function () { return j < 3; },
                    function () { j++; },
                    function (flow) {
                        flow.suspend();
                        console.log("i", i, "j", j);
                        setTimeout(function () { flow.resume(); }, 10);
                    }
                )
            }).then(function () {
                console.log("end j");
            })
        )
    })
).then(function () {
    console.log("c");
}).start();
