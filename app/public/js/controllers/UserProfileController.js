angular.module('MetronicApp').controller('UserProfileController', function($rootScope, $scope, $http, $timeout, $state) {
    $scope.$on('$viewContentLoaded', function() {   
        App.initAjax(); // initialize core components
        Layout.setAngularJsSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile'), $state); // set profile link active in sidebar menu 
    });

    //var baseUrl = "http://127.0.0.1:1337";
     var baseUrl = "http://188.226.137.100:1337";
   
     $scope.dashboardUser = function(userId){

        //console.log('user profile controller' + userId);
         var formData = {
         	userId:userId,
         };
         $http.post(baseUrl + '/userEnquiries',formData).then(function(response){ 
              $rootScope.userEnquiries = response.data.data; 
              window.location.href = "/#/salesprofile/salesprofile.dashboard";
             console.log(response.data.data);
        });
     }


    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageBodySolid = true;
    $rootScope.settings.layout.pageSidebarClosed = false;
}); 
