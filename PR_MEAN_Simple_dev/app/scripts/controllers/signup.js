'use strict';

angular.module('prMeanApp')
  .controller('MainCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;
  
      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $http.get('/api/getUsers').success(function(prUsers) {
            $scope.prUsers = prUsers.slice().reverse(); // Create a copy of the array and reverse the order of the items
          });
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $http.get('/api/getUsers').success(function(prUsers) {
      $scope.prUsers = prUsers.slice().reverse(); // Create a copy of the array and reverse the order of the items
    });
  });



