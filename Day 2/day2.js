// Angular Class - 4-7-2016
// S. Goodwin
// Notes
/*
*** Website Sent Via SLACK : https://docs.angularjs.org/guide/di *** Need to Read

================================================================================
==============================Start of Notes====================================
================================================================================


Scope is a Service
Scope is an Object
All Services have a Dollar sign
Aadd variable welcome into the scopesope becomes that tie before the view and the Controller


*/

/*
================================================================================
====================================Class Example===============================
================================================================================
*/

console.log('snippets');

//Dependency injection example
console.log('DependencyExample\n\\\==========/')
var Person = function(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

// function logPerson() {
// var john = new Person('Mike', 'Tyson');
// console.log(john);
// }
//logPerson();

function logPerson(person) {
  console.log(person);
}
var john = new Person('Mike', 'Tyson');
logPerson(john.firstname + " " +john.lastname);

/*
================================================================================
=========================Class Work=============================================
================================================================================
*/ // Copied from the Board.//
var app = angular.module('classApp', []);
app.controller('linkList', function(scope){
  $scope.welcome = "Hello Students";
// Copied from the Board.//
  $scope.class = {description: "This is the mmain github page for fiding all the.."}
  $scope.info = [
    {title:"Github organization", link: "https://github.com/geekwise-intro-angular"},
    {title:"Class Site", link: "https://geekwise-intro-angular.github.io/class-site/#/"},
    {title:"The repo to this page", link: "https://github.com/geekwise-intro-angular"}
  ]  });


angular.module("Day2", []) // created a Object
factory("Data", function(){
  return [message = "thiss is my data";]
})
angular.module("Day2").controller("Ctrl" function($scope){
  this.message = Data
};
