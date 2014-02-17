///<reference path='./../def/defLoader.d.ts'/>
/**
* Return the public config. Works both client and server side.
* @type {function(): exports.exports.paths.public|*|config}
*/
getPublicConfig = (function () {
    return __config.public || config;
});

/**
* Execute the callback if we are in dev mode or return true, can be used synch or asynch.
* @type {function(*): undefined}
*/
dev = (function (callback) {
    if (typeof callback === "undefined") { callback = false; }
    if (getPublicConfig().environment == 'development') {
        if (callback) {
            callback(__config);
        } else {
            return true;
        }
    }
});

/**
* Display the message with the defined console type.
* @type {function(*, *=): undefined}
*/
devConsole = devConsole = (function (message, type) {
    if (typeof type === "undefined") { type = 'info'; }
    if (dev()) {
        if (typeof sails !== 'undefined' && sails.log[type]) {
            sails.log[type](message);
        } else if (console[type]) {
            console[type](message);
        } else {
            console.log(message);
        }
    }
});

/**
* Alias for devConsole.
* @type {function(*, *=): undefined|*}
*/
consoleDev = devConsole;
//# sourceMappingURL=debug.js.map
