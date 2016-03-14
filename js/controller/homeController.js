/**
 * Created by chandu on 1/11/2016.
 */

angular.module('homeCtrl', []).controller('homeController', function($scope) {

$scope.headline='Welcome To My Home Page';


    $scope.bodyline='I am a Graduate Student at Department of Computer Science, University of Central Florida, Orlando,USA. I am working as Graduate Research Assistant under Dr.Gary T Leavens. My research includes translating separation logic to dynamic frames or region logic and implement to JML(Java Modeling Language).';
    $scope.secondline = 'I have 1yr 9 months of work experience as a Assistant System Engineer in Tata Consultancy Services Limited(TCS), India. My work experience includes design and implement the web based application using Struts1.3 Framework including JSP, Servlets, EJB, Form Bean and Action classes.';
    $scope.thirdline = 'I would be graduating in Spring 2017 and I am presently looking for Internship opportunities to apply my workplace and educational experience in building the applications.';

});

