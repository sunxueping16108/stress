var test = angular.module('myTest', ['ng','ui.router']);
test.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('attackM', {
		url: '/attackM',
		templateUrl: 'template/attack_m.html',
		controller: 'attackMController'
	}).state('taskM', {
		url: '/taskM',
		templateUrl: 'template/task_m.html',
		controller: 'taskMController'
	}).state('webC', {
		url: '/webC',
		templateUrl: 'template/web_c.html',
		controller: 'webCController'
	}).state('userInfoS', {
		url: '/userInfoS',
		templateUrl: 'template/userInfo_s.html',
		controller: 'userInfoSController'
	});

	$urlRouterProvider.otherwise('/attackM');
});