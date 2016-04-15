'use strict';
require('./style.css');
var mod1Version = require('./mod1');
var itv = setInterval(function() {
    console.log(mod1Version);
}, 1000);


if (module.hot) {
    // accept update of dependency
    module.hot.accept("./mod1", function() {
        itv.clearInterval();
        mod1Version = require("./mod1");
        itv = setInterval(function() {
            console.log(mod1Version);
        }, 1000);
    });
}
