angular.module('MetronicApp').controller('DashboardController', function($rootScope, $scope, $http, $timeout,$localStorage) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();
    });


    
    //var baseUrl = "http://127.0.0.1:1337";
    var baseUrl = "http://95.85.10.198:1337";
    $http.get(baseUrl + '/inventoryCount').then(function(response){ 
    	$scope.invCount = response.data.data; 
    	 console.log(response.data.data);
     });
    $http.get(baseUrl + '/importsCount').then(function(response){ 
        $scope.importsCount = response.data.data; 
         console.log(response.data.data);
     });
    $http.get(baseUrl + '/importersCount').then(function(response){ 
        $scope.importersCount = response.data.data; 
         console.log(response.data.data);
     });
    $http.get(baseUrl + '/enquiriesCount').then(function(response){ 
        $scope.enquiriesCount = response.data.data; 
         console.log(response.data.data);
     });

    $scope.signIn = function(){
             var formData = {
                    email: $scope.email,
                    password: $scope.password,
  
                };

        $http.post(baseUrl + '/admin',formData).then(function(response){ 
            
             console.log(response.data.data);
             $localStorage.adminUserTokens = response.data.data;
             window.location.href = "/#/dashboard";
             //window.location.reload();
        });

                //console.log(formData);
    }
    


    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;

    $rootScope.adminUserId = 1;
});

/*
    app.get('/inventoryCount',statistics.inventoryCount);
    app.get('/s_inventoryCount',statistics.s_inventoryCount);
    app.get('/suppliersCount',statistics.suppliersCount);
    app.get('/importersCount',statistics.importersCount);
    app.get('/importsCount',statistics.importsCount);
    app.get('/enquiriesCount',statistics.enquiriesCount);

    app.get('/enquiriesHotCount',statistics.enquiriesHotCount);
    app.get('/enquiriesColdCount',statistics.enquiriesColdCount);
    app.get('/enquiriesMediumCount',statistics.enquiriesMediumCount);
    app.get('/clientsCount',statistics.clientsCount);

*/