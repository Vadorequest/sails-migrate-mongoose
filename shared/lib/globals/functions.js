///<reference path='./../def/defLoader.d.ts'/>
/**
* Capitalize the first letter.
* @param str
* @returns {string}
*/
ucfirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
* Uncapitalize the first letter.
* @param str
* @returns {string}
*/
lcfirst = function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
//# sourceMappingURL=functions.js.map
