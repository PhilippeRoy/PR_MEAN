'use strict';

angular.module('prMeanApp')
  .factory('Auth', function Auth($location, $rootScope, User) {
    
    return {
      /**
       * Create a new user
       * 
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional
       * @return {Promise}            
       */
      createUser: function(user, callback) {
        var cb = callback || angular.noop;

        return User.save(user, function(user) {
            return cb(user);
          },
          function(err) {
            return cb(err);
          }).$promise;
      },

     
    };
  });


angular.module('prMeanApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id', {
      id: '@id'
    });
  });
