/**
 * Created by chandu on 12/23/2015.
 */


angular.module('routes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){



    $routeProvider.when('/',{

        templateUrl:'../../partials/homePartial.html',
        controller:'homeController'
    })
        .when('/projects',{
        templateUrl:'../../partials/project.html',
        controller: 'projectController'
    })

        .when('/work',{
            templateUrl:'../../partials/workexperience.html',
            controller:'workController'
        })
        .when('/certificate',{
            templateUrl:'../../partials/certficate.html',
            controller:'certficateController'

    })
        .when('/contact',{
            templateUrl:'../../partials/contact.html',
            controller:'contactController'

        })
        .when('/skl',{
            templateUrl:'../../partials/skl.html',
            controller:'sklController'

        })
    .otherwise({redirectTo:'/'});

    $locationProvider.html5Mode({enabled:true , requireBase: false});






}]);