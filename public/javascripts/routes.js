(function (){
  'use strict';

  // the route code goes here
  angular.module("Contacts")
    .config(['$routeProvider', function ($routeProvider) {
      console.log("router says hi");
      $routeProvider
        .when('/contacts', {
          templateUrl: 'templates/contacts-list.html',
          controller: 'ContactsListController'
        })
        .when('/contacts/:id', {
          templateUrl: 'templates/edit-contact.html',
          controller: 'EditContactController'
        })
        .when('/add-contact',{
          templateUrl: 'templates/add-contact.html',
          controller: 'AddContactController'
        })
        .when('/about', {
          templateUrl: 'templates/about.html'
        })
        .otherwise({
          redirectTo: '/about'
        });

    }]);

}());