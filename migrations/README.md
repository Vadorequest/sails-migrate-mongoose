[Migrate](https://npmjs.org/package/mongo-migrate)

*-cfg*
*-dbn*
*-rnmm*
*-runmm down 5* (version)

**Create new migration file**
```
node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm create init_collection
```

**Run migration**
```
node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm
```

**Revert migration**
```
node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm down 5
```

@See: http://docs.mongodb.org/manual/reference/command/#testing-commands

```
db.addUser( { user: "superAny",pwd: "ArDhXusecvUqSmNssqdiChHv$N6FRhiG",roles: [ "userAdminAnyDatabase" ] } )
db.addUser({user: 'ayolan', pwd: 'fudkr9qvuoEt0JP2$DwIo4cEC9DWas5c', roles: ["readWrite", "dbAdmin"]})

// https://stackoverflow.com/questions/4881208/how-to-put-username-password-in-mongodb

mongod --auth

use ayolan
db.auth('ayolan', 'fudkr9qvuoEt0JP2$DwIo4@EC9DW#s5c')
use admin
db.auth('superAny', 'ArDhXusecvUqSmNssqdiChHv$N6FRhiG')
```


TODO
====
Créer les index pour les sous documents à la main.