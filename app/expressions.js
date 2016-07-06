
angular.module("expressionApp", ["ngMaterial"])
.controller("browsingCntrl", ["$scope", "$mdSidenav", browsingCntrl])
;

function browsingCntrl($scope, $mdSidenav)
{
  $scope.title = "Expressions";
  $scope.show_profile_form = false;
  $scope.toggle_profile_edit = function() {
    $scope.show_profile_form = !$scope.show_profile_form;
  }
  $scope.toggle_left_menu = function() {
    $mdSidenav('left_menu').toggle();
  };
  $scope.navs = [
    {"label" : "preference", "icon" : "settings"},
    {"label" : "favorites", "icon" : "favorite"},
    {"label" : "news", "icon" : "bubble_chart"},
    {"label" : "profile", "icon" : "picture_in_picture"},
    {"label" : "login", "icon" : "fingerprint"},
  ];
  $scope.people = [
    {"name": "Alex", city : "san mateo", "img" : "img/1.jpg",
     "bio" : "Faucibus nisl tincidunt eget nullam non nisi est, sit amet facilisis magna etiam tempor, orci eu lobortis elementum, nibh tellus molestie nunc, non blandit massa!" },
    {"name": "Anthony", city : "san carlos",  "img" : "img/2.jpg",
     "bio" : "Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit." },
    {"name": "Blake", city : "redwood city",  "img" : "img/1.jpg",
     "bio" : "Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas!" },
    {"name": "Dylan", city : "menlo park",  "img" : "img/3.jpg",
     "bio" : "A scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor, id aliquet lectus! A scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor, id aliquet lectus!" },
    {"name": "Britt", city : "palo alto",  "img" : "img/4.jpg",
     "bio" : "Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu!" },
    {"name": "Mozelle", city : "Chicago",  "img" : "img/5.jpg",
     "bio" : "Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu!" },
    {"name": "Daniella", city : "Berkeley alto",  "img" : "img/6.jpg",
     "bio" : "Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu!" },
    {"name": "Rosa", city : "Mountain View",  "img" : "img/7.jpg",
     "bio" : "Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu!" },
    {"name": "Jillian", city : "Los Alto",  "img" : "img/8.jpg",
     "bio" : "Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu! Enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu!" }

];
}