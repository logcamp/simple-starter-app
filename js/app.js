angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('page1', {
    url: "/page1",
    views: {
      'menuContent': {
        templateUrl: 'templates/page1.html'
      }
    }
  })
  .state('page2', {
    url: "/page2",
    views: {
      'menuContent': {
        templateUrl: 'templates/page2.html'
      }
    }
  })
  .state('page3', {
    url: "/page3",
    views: {
      'menuContent': {
        templateUrl: 'templates/page3.html'
      }
    }
  })
  .state('page4', {
    url: "/page4",
    views: {
      'menuContent': {
        templateUrl: 'templates/page4.html'
      }
    }
  })
  .state('page5', {
    url: "/page5",
    views: {
      'menuContent': {
        templateUrl: 'templates/page5.html'
      }
    }
  })
  .state('page6', {
    url: "/page6",
    views: {
      'menuContent': {
        templateUrl: 'templates/page6.html'
      }
    }
  })
  .state('page7', {
    url: "/page7",
    views: {
      'menuContent': {
        templateUrl: 'templates/page7.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/page1');
  
})

.controller('MenuCtrl', function($scope) {
  $scope.openLeft = function() {
    $scope.sideMenuController.toggleLeft();
    console.log($scope);
  };
});
