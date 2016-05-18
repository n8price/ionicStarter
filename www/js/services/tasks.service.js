(function() {
'use strict';

     angular
          .module('starter')
          .factory('TasksService', TasksService);

     TasksService.$inject = ['$http', 'Backand'];
     function TasksService($http, Backand) {
          var service = {
               getTasks:getTasks
          };
          
          return service;

          ////////////////
function getTasks(projectId) {
return $http({
     method: 'GET',
     url: Backand.getApiUrl() + '/1/objects/task/',
     params: {
       filter: [{ "fieldName": "project_id", "operator": "in", "value": projectId }],
       sort: [{ "fieldName": "completed", "order": "asc" }, { "fieldName": "name", "order": "asc" }]
     }
   }).then(function (result) {
     return result.data;
  });
          }
     }
})();