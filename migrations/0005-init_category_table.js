require('./init');
console.log('init loaded');
exports.up = function(db, next){
    var documentName = 'category';
    var document;

    /**
     * Create basic data.
     */
    document = new Category({
        code: '0',
        name: 'languageStatus'
    });
    document.save(function(error, data){
        console.log(error ? error : documentName + ': [insert] ' + JSON.stringify(data));
    });
    next();
};

exports.down = function(db, next){
    next();
};
