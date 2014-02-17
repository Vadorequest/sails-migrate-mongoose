# sails-migrate-mongoose
To test, just ruen the command:

node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm

or

node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm down

This wil run the migration, "up" by default.
You should see:

```
C:\wamp\www\sails-migrate-mongoose>node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm     
"init.js" ignored. Does not match migration naming schema
"README.md" ignored. Does not match migration naming schema
bootstrap loaded
init loaded
  up : migrations/0005-init_category_table.js

C:\wamp\www\sails-migrate-mongoose\node_modules\mongoose\lib\schema\string.js:221
      ? regExp.test(v)
               ^
TypeError: Object #<Object> has no method 'test'
    at model.matchValidator (C:\wamp\www\sails-migrate-mongoose\node_modules\mongoose\lib\schema\string.js:221:16)
    at C:\wamp\www\sails-migrate-mongoose\node_modules\mongoose\lib\schematype.js:627:28
    at Array.forEach (native)
    at SchemaString.SchemaType.doValidate (C:\wamp\www\sails-migrate-mongoose\node_modules\mongoose\lib\schematype.js:614:19)
    at C:\wamp\www\sails-migrate-mongoose\node_modules\mongoose\lib\document.js:956:9
    at process._tickCallback (node.js:415:13)
```

schemas are located at:
**api/db/schemas/**

The down don't fail, of course I don't try to use mongoose there:
```
C:\wamp\www\sails-migrate-mongoose>node node_modules/mongo-migrate -cfg config/custom/mongodb.json -dbn development-migrate -runmm down
"init.js" ignored. Does not match migration naming schema
"README.md" ignored. Does not match migration naming schema
bootstrap loaded
init loaded
  down : migrations/0005-init_category_table.js
  migration : complete
```

