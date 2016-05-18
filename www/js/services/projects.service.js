(function() {
'use strict';

     angular
          .module('starter')
          .factory('ProjectsService', ProjectsService);

     ProjectsService.$inject = ['$http', 'Backand'];
     function ProjectsService($http, Backand) {
          var service = {
               getProjects:getProjects
          };
          
          return service;

          ////////////////
 function getProjects() {
return $http({
     method: 'GET',
     url: Backand.getApiUrl() + '/1/objects/project/',
     params: {
       sort: '[{ "fieldName": "name", "order": "asc" }]'
     }
   }).then(function (result) {
     return result.data;
  });
 }
     }
})();