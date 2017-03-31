angular.module('assessment', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'js/views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/views/about.html'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'js/views/blog.html'
    })
    .state('shop', {
      url: '/shop',
      templateUrl: 'js/views/shop.html'
    })
    .state('details', {
      url: 'details/:id',
      templateUrl: 'js/views/product-details.html'
    });

    // $urlRouterProvider.otherwise('/');

  });
