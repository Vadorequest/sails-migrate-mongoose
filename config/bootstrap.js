/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {
    /**
     * Require globals functions.
     */
    require('./../shared/lib/globals/debug');
    require('./../shared/lib/globals/functions');
    require('./../shared/lib/globals/objectExtended');

    /**
     * Environment global variables.
     */
    __config = objectHelper.merge(require('./../shared/config/_serverConfig.json'), require('./custom/_serverConfig.json'));
    __config.public = objectHelper.merge(require('./../shared/config/serverConfig.json'), require('./custom/serverConfig.json'));
    process.env.NODE_ENV = __config.public.environment;

    __config.path.base = __dirname + '/../';

    mongoose = require('mongoose'),
        Schema = require('mongoose').Schema
    ;

    /**
     * ***************************************************************
     * ********************** Database Connect ***********************
     * ***************************************************************
     */
    var mongodbConfig = require('./custom/mongodb.json')[__config.public.environment];
    mongoose.connect('mongodb://'+mongodbConfig.host+'/'+mongodbConfig.database);

    var mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'connection error:'));

    mongodb.once('open', function callback () {
        consoleDev('Mongoose db connection is now open.');
    });


  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};