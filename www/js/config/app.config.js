angular.module('starter')
   .config(config);

 config.$inject = ['$stateProvider', '$urlRouterProvider', 'BackandProvider'];

 function config ($stateProvider, $urlRouterProvider, BackandProvider) {
   $stateProvider
     .state('projects', {
       url: '/projects',
       templateUrl: 'templates/projects.html',
       controller:'ProjectsController as vm'
     })
     .state('tasks', {
     url: '/tasks/:projectId',
     templateUrl: 'templates/tasks.html',
     controller: 'TasksController as vm'
     })
     .state('signup', {
       url: '/signup',
       templateUrl: 'templates/signup.html',
       controller: 'SignupController as vm'
 });

   $urlRouterProvider.otherwise('/projects');

  BackandProvider.setAnonymousToken("c169b412-4a0d-47fb-ad10-06aff1235737");
  BackandProvider.setAppName("ncws");

BackandProvider.setSignUpToken('14d7ec8d-e57a-4d93-9724-10f7879a352b');
 }