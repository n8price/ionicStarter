(function() {
'use strict';

     angular
          .module('starter')
          .controller('ProjectsController', ProjectsController);

     ProjectsController.$inject = ['ProjectsService'];
     function ProjectsController(ProjectsService) {
          var vm = this;
          

          activate();

          ////////////////

 function activate() {
       ProjectsService.getProjects().then(function (response) {
         vm.projects = response.data;
       });
          }
     }
})();