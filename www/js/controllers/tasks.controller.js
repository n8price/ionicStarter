(function() {
'use strict';

     angular
          .module('starter')
          .controller('TasksController', TasksController);

     TasksController.$inject = ['TasksService', '$stateParams'];
     
     function TasksController(TasksService, $stateParams) {
          var vm = this;
          
     var projectId = $stateParams.projectId;

          activate();

          ////////////////

function activate() {
       TasksService.getTasks(projectId)
         .then(function (result) {
           vm.tasks = result.data;
         });
          }
     }
})();