/**
 * Run the initialization only once.
 */
if(typeof __config === "undefined"){

    /**
     * Load bootstrap services dependencies.
     * Are usually imported by sails, but we don't use sails.
     * @type {exports}
     */
    objectHelper = require('./../api/services/objectHelper');

    /**
     * Execute bootstrap to load all dependencies.
     */
    require('./../config/bootstrap').bootstrap(function(){
        console.log('bootstrap loaded');
    });

    /**
     * Read the args to know the environment.
     * @type {*}
     */
    var args = require('optimist').argv;
    var environment = args.n[0].replace('-migrate', '');

    /*
     Override the defined environment.
     */
    __config.public.environment = environment;


    /**
     * Mongoose schemas and models.
     * @type {string}
     */
    var pathSchemas = './../api/db/schemas/';
    var CategorySchema = mongoose.Schema(require(pathSchemas + 'categorySchema.js'));
    Category = mongoose.model('category', CategorySchema);
}
