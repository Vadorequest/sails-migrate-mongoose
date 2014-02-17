/**
 * Schema ued to create a label, this is a private type, won't have a Model.
 * A label is composed basically by a code and a name.
 * @see http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
 */
var _labelSchema = {
    /**
     * Code that references a sentence object. Used to translate the name into different languages.
     */
    code: {
        type: 'string',
        match: /^[a-zA-Z0-9]+$/,
        trim: true,
        required: true,
        notEmpty: true,
        unique: true
    },

    /**
     * Name, in English, used by the application itself to reference a category.
     */
    name: {
        type: 'string',
        match: /^[a-zA-Z]+$/,
        trim: true,
        required: true,
        notEmpty: true,
        unique: true,
        check: {
            minLength: 2
        }
    }
};

/**
 * Export.
 */
module.exports = _labelSchema;