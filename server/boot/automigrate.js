'use strict'
module.exports = (app) => {
  app.datasources.db.autoupdate(['AccessToken', 'ACL', 'RoleMapping', 'Role' , 'one', 'two'], err => {
    if (err) throw err;
    console.log('connected to mysql');
  });
}

