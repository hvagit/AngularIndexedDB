
var dbControllers = angular.module('dbControllers', []);

dbControllers.controller('myControllerName', function($scope, $indexedDB) {


var req = indexedDB.deleteDatabase('myIndexedDB4');
req.onsuccess = function () {
    console.log("Deleted database successfully");
};
req.onerror = function () {
    console.log("Couldn't delete database");
};
req.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
};



    $scope.boegerne = [];
    $scope.films = [];

        $scope.opretFilm = function() {
            $indexedDB.openStore('film', function(store) {
              store.insert({"id": $scope.idFilmInp,"instruktoer": $scope.instruktoerInp, "trailer": $scope.trailerInp, "udgivet": $scope.udgivetInp}).then(function(e){});
            });
            $scope.hentAlleFilm();
        };

        $scope.opretBog = function() {
            $indexedDB.openStore('bog', function(store) {
    /*          store.insert({"id": $scope.idBogInp,"dk5": $scope.dk5Inp, "forfatter": $scope.forfatterInp, "titel": $scope.titelInp, "isbn": $scope.isbnInp}).then(function(e){}); */
              store.insert({"dk5": $scope.dk5Inp, "forfatter": $scope.forfatterInp, "titel": $scope.titelInp, "isbn": $scope.isbnInp}).then(function(e){}); 
            });
            $scope.hentAlleBoeger();
        };

        $scope.hentAlleBoeger = function() {
            $indexedDB.openStore('bog', function(store) {
              store.getAll().then(function(boeger) {  
                $scope.boegerne = boeger;
              });
            });
        };

        $scope.hentAlleFilm = function() {
            $indexedDB.openStore('film', function(store) {
              store.getAll().then(function(filmene) {  
                $scope.films = filmene;
              });
            });
        };
        
        $scope.hentAlleFilm();
        $scope.hentAlleBoeger();

});
  