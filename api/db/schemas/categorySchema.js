/**
 * Schema ued to create a category.
 * A category is copied into each type.
 * @see http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 */
var label = JSON.parse(JSON.stringify(require('./_label')));

var categorySchema = {
    /**
     * Code that references a sentence object. Used to translate the name into different languages.
     */
    code: label.code,

    /**
     * Name, in English, used by the application itself to reference a category.
     */
    name: label.name
};

/**
 * Export.
 */
module.exports = categorySchema;