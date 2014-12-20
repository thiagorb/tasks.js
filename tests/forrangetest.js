var Task = require("Task");

new Task(function () {
    console.log("start");
}).then(
    Task.ForRange(0, 2, function(flowi, i) {
        flowi.suspend();
        Task.ForRange(0, 2, function(flowj, j) {
            flowj.suspend();
            console.log("i", i, "j", j);
            setTimeout(function () { flowj.resume(); }, 10);
        }).then(function () {
            flowi.resume(); 
        }).start();
    })
).then(function () {
    console.log("end");
}).start();