var dbApp = angular.module('myModuleName', ['indexedDB','dbControllers']);
        
dbApp.config(function ($indexedDBProvider) {
    $indexedDBProvider
      .connection('myIndexedDB4')
      .upgradeDatabase(1, function(event, db, tx){
        var objStore = db.createObjectStore('bog', {keyPath: 'id'});
        objStore.createIndex('dk5_idx', 'dk5', {unique: false});
        objStore.createIndex('forfatter_idx', 'forfatter', {unique: false});
        objStore.createIndex('titel_idx', 'titel', {unique: false});
        objStore.createIndex('isbn_idx', 'isbn', {unique: false});
        var objStore2 = db.createObjectStore('film', {keyPath: 'id'});
        objStore2.createIndex('trailer_idx', 'trailer', {unique: false});
        objStore2.createIndex('instruktoer_idx', 'instruktoer', {unique: false});
        objStore2.createIndex('udgivet_idx', 'udgivet', {unique: false});
      });
});


