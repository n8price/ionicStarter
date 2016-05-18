(function() {
'use strict';

     angular
          .module('starter')
          .controller('SignupController', SignupController);

     SignupController.$inject = ['LoginService', '$rootScope', '$state'];
     function SignupController(LoginService, $rootScope, $state) {
          var vm = this;
          vm.signup = signup;          

          activate();

          ////////////////

          function activate() { }

function signup() {
       vm.error = '';
       LoginService.signup(vm.formdata.firstName, vm.formdata.lastName, vm.formdata.email, vm.formdata.password, vm.formdata.passwordConfirm)
         .then(function (result) {
           $state.go('projects');
         },
         function (error) {
           if (error.error_description !== undefined) {
             vm.error = error.error_description;
           } else {
             vm.error = 'Unknown Error';
           }

         });
     }

     }
})();