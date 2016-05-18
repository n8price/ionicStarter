(function() {
'use strict';

     angular
          .module('starter')
          .factory('LoginService', LoginService);

     LoginService.$inject = ['Backand'];
     function LoginService(Backand) {
          var service = {
               signup:signup
          };
          
          return service;

          ////////////////
          function signup(firstName, lastName, email, password, passwordConfirm) {

               return Backand.signup(firstName, lastName, email, password, passwordConfirm);               
          }
     }
})();