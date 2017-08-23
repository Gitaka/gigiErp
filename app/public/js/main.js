/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var MetronicApp = angular.module("MetronicApp", [
    "ui.router", 
    "ui.bootstrap", 
    "oc.lazyLoad",  
    "ngSanitize",
    'ngStorage'
]); 

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
MetronicApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

//AngularJS v1.3.x workaround for old style controller declarition in HTML
MetronicApp.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
MetronicApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: '../assets/global',
        layoutPath: '../assets/layouts/layout',
    };

    $rootScope.settings = settings;

    return settings;
}]);

angular.module('MetronicApp')
    .factory('Main',['$http','$localStorage',function($http,$localStorage){
        var baseUrl = "http://95.85.10.198:1337";
       //var baseUrl = "http://127.0.0.1:1337";

        return{
    
            inventory: function(success, error) {
                $http.get(baseUrl + '/inventory').success(success).error(error)
            }, 
            makes: function(success, error) {
                $http.get(baseUrl + '/makes').success(success).error(error)
            }, 
            reservedCars: function(success, error) {
                $http.get(baseUrl + '/reservedCars').success(success).error(error)
            }, 
            suppliersCategory: function(success, error) {
                $http.get(baseUrl + '/supplierCategories').success(success).error(error)
            },
            suppliersByCategory:function(data,success, error) {
                $http.post(baseUrl + '/suppliersByCategory',data).success(success).error(error)
            }, 
            addSupplierCategory:function(data,success, error) {
                $http.post(baseUrl + '/supplierCategory',data).success(success).error(error)
            }, 
            deleteSupplierCategory:function(data,success, error) {
                $http.post(baseUrl + '/deleteSuppCategories',data).success(success).error(error)
            }, 
            soldCars: function(success, error) {
                $http.get(baseUrl + '/soldCars').success(success).error(error)
            }, 
            addInventory: function(data, success, error) {
                 //$http.post(baseUrl + '/inventory',data).success(success).error(error)
                $http.post(baseUrl + '/inventory', data,{
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                }).success(success).error(error)

            },
            invByStatus: function(data,success, error) {
                $http.post(baseUrl + '/byStatus',data).success(success).error(error)
            }, 
            invByMake: function(data,success, error) {
                $http.post(baseUrl + '/invByMake',data).success(success).error(error)
            }, 
            invByMakeSupp: function(data,success, error) {
                $http.post(baseUrl + '/invByMakeSupp',data).success(success).error(error)
            }, 
            flagSold: function(data,success, error) {
                $http.post(baseUrl + '/sold',data).success(success).error(error)
            }, 
            /*invento:function(success,error){
                $http.get(baseUrl + '/inv').success(success).error(error)
            }, */      
            invento: function(data,success, error) {
                $http.post(baseUrl + '/inv',data).success(success).error(error)
            },  
            reserve: function(data,success, error) {
                $http.post(baseUrl + '/reserve',data).success(success).error(error)
            },  
            reserveComments: function(data,success, error) {
                $http.post(baseUrl + '/reserveComments',data).success(success).error(error)
            },    
            returnComments: function(data,success, error) {
                $http.post(baseUrl + '/returnComments',data).success(success).error(error)
            },  
            returned: function(data,success, error) {
                $http.post(baseUrl + '/returnToSupp',data).success(success).error(error)
            },   
            viewCar: function(success, error) {
                $http.get(baseUrl + '/inventory').success(success).error(error)
            },

            addCar: function(success, error) {
                $http.post(baseUrl + '/inventory').success(success).error(error)
            },

            imports: function(success, error) {
                $http.get(baseUrl + '/imports').success(success).error(error)
            },

            importers: function(success, error) {
                $http.get(baseUrl + '/importers').success(success).error(error)
            },
            clients: function(success, error) {
                $http.get(baseUrl + '/clients').success(success).error(error)
            },

            crm: function(success, error) {
                $http.get(baseUrl + '/enquiries').success(success).error(error)
            },
            getCrm: function(data,success, error) {
                $http.post(baseUrl + '/getEnquiry',data).success(success).error(error)
            },
            updateCrm:function(data,success,error){
                $http.post(baseUrl+'/updateEnq',data).success(success).error(error)
            },
            updateCarFeatures:function(data,success,error){
                $http.post(baseUrl+'/carFeatures',data).success(success).error(error)
            },
            addEnquiries: function(data, success, error) {
                $http.post(baseUrl + '/enquiry',data).success(success).error(error)
            },

            addImport: function(data, success, error) {
                $http.post(baseUrl + '/import',data).success(success).error(error)
            },
            updateImports:function(data,success,error){
                $http.post(baseUrl + '/importStatus',data).success(success).error(error)
            },
        
            addImporter: function(data, success, error) {
                $http.post(baseUrl + '/importer',data).success(success).error(error)
            },

            suppliers: function(success, error) {
                $http.get(baseUrl + '/suppliers').success(success).error(error)
            },
            suppliersInventory: function(success, error) {
                $http.get(baseUrl + '/suppInv').success(success).error(error)
            },
            addSupplier: function(data, success, error) {
                $http.post(baseUrl + '/supplier',data).success(success).error(error)
            },
            supplierInventory: function(data,success,error){
                $http.post(baseUrl+'/supplierInventory',data).success(success).error(error)
            },
            addClients: function(data,success,error){
                $http.post(baseUrl + '/addClients',data).success(success).error(error)
            },
            salespeople: function(success, error) {
                $http.get(baseUrl + '/users').success(success).error(error)
            },
            getSalesUserEnquiries:function(data,success,error){
                $http.post(baseUrl + '/userEnquiries',data).success(success).error(error)
            },
            registerUser: function(data, success, error) {
                $http.post(baseUrl + '/users',data).success(success).error(error)
            },

            getSingleUser:function(data,success,error){
                $http.post(baseUrl + '/getSingleUser',data).success(success).error(error)
            },
            getProjects:function(data,success,error){
                $http.post(baseUrl + '/projects',data).success(success).error(error);
            },
            addProjects:function(data,success,error){
                $http.post(baseUrl + '/createProject',data).success(success).error(error);
            },
            getEvents:function(data,success,error){
                $http.post(baseUrl + '/events',data).success(success).error(error);
            },
            addEvents:function(data,success,error){
                $http.post(baseUrl + '/createEvent',data).success(success).error(error);
            },
            getTasks:function(data,success,error){
                $http.post(baseUrl + '/tasks',data).success(success).error(error);
            },
            addTasks:function(data,success,error){
                $http.post(baseUrl + '/createTask',data).success(success).error(error);
            },
            getMilestones:function(data,success,error){
                $http.post(baseUrl + '/milestones',data).success(success).error(error);
            },
            addMilestones:function(data,success,error){
                $http.post(baseUrl + '/createMilestone',data).success(success).error(error);
            },
            availableCars: function(success, error) {
                $http.get(baseUrl + '/availableCars').success(success).error(error)
            },
            collectedCars: function(success, error) {
                $http.get(baseUrl + '/carsReturnedToSupp').success(success).error(error)
            },
            flagAsDeleted:function(data,success,error){
                $http.post(baseUrl + '/deleteCar',data).success(success).error(error);
            },
            flagAvailable:function(data,success,error){
                $http.post(baseUrl + '/carNowAvailable',data).success(success).error(error);
            },
        };

    }]);

/* Setup App Main Controller */
MetronicApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
MetronicApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
MetronicApp.controller('SidebarController', ['$state', '$scope', function($state, $scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar($state); // init sidebar
    });
}]);

/* Setup Layout Part - Quick Sidebar */
MetronicApp.controller('QuickSidebarController', ['$scope', function($scope) {    
    $scope.$on('$includeContentLoaded', function() {
       setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar        
        }, 2000)
    });
}]);

/* Setup Layout Part - Theme Panel */
MetronicApp.controller('ThemePanelController', ['$scope', function($scope) {    
    $scope.$on('$includeContentLoaded', function() {
        Demo.init(); // init theme panel
    });
}]);

/* Setup Layout Part - Footer */
MetronicApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

angular.module('MetronicApp')
       .controller('InventoryController',['$rootScope','$scope','$location','$localStorage','Main',function($rootScope,$scope,$location,$localStorage,Main){
                Main.suppliers(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.allSuppliers = res.data;     
                       console.log(res); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });
                
                $scope.isObjectEmpty = function(card){
                  return Object.keys(card).length === 0;
                 }

                $scope.getMakes = function(id,carMake){
                        var formData = {
                            id:id,                  
                        }
                   Main.invByMake(formData,function(res){
                     if(res.type == false){
                        alert(res.data);
                     }else{
                        $rootScope.makeInventory = res.data;
                        $rootScope.carMake = carMake;
                        window.location.href = "/#/inventory_singlemake";
                        console.log(res.data);
                     }
                   },function(){
                    $rootScope.error = 'Failed to load data from server';
                   });

                /*Main.invByMake(formData,function(res){
                        $rootScope.makeInventory = res.data;
                        window.location.href = "/#/inventory_singlemake";
                    console.log(res);
                });*/
                      //console.log(formData);
                }

                $scope.getByStatus = function(id,status){
                        var formData = {
                            id:id, 
                            status:status,                 
                        }
                Main.invByStatus(formData,function(res){
                        $rootScope.statusInventory = res.data;
                        window.location.href = "/#/inventory_reserve_singlemake";
                    console.log(res);
                });
                      //console.log(formData);
                }
                $scope.getBySold = function(id,status,carMake){
                        var formData = {
                            id:id, 
                            status:status,                 
                        }
                Main.invByStatus(formData,function(res){
                        $rootScope.statusInventory = res.data;
                        $rootScope.soldCarMake = carMake;
                        window.location.href = "/#/inventory_sold_singlemake";
                    console.log(res);
                });
                      //console.log(formData);
                }
                $scope.go = function(carId){
                   var formData = {
                      id:carId,
                      
                   };

                   Main.invento(formData,function(res){
                     if(res.type == false){
                        alert(res.data);
                     }else{
                        $rootScope.inv = res.data;

                        window.location.href = "/#/inventory_singlecar";
                        console.log(res.data);
                     }
                   },function(){
                    $rootScope.error = 'Failed to load data from server';
                   });
            }

             $scope.goToStatus = function(carId){
                   var formData = {
                      id:carId,
                      
                   };

                   Main.invento(formData,function(res){
                     if(res.type == false){
                        alert(res.data);
                     }else{
                        $rootScope.inv = res.data;

                        window.location.href = "/#/inventory_status_singlecar";
                        
                        console.log(res.data);
                     }
                   },function(){
                    $rootScope.error = 'Failed to load data from server';
                   });
            }




                  $scope.addInventory = function(){
                    var formData = {
                            post_name: $scope.post_name,
                            post_content: $scope.post_content,    
                            price: $scope.price,   
                            year: $scope.year,    
                            fuel: $scope.fuel,    
                            transmission: $scope.transmission,    
                            doors: $scope.doors,   
                            model: $scope.model,   
                            bodyType: $scope.bodyType,    
                            mileage: $scope.mileage, 
                            color: $scope.color,   
                            engine: $scope.engine,
                            imgUploader: $scope.imgUploader,
                            make: $scope.make,                 
                          };
                        
                        Main.addInventory(formData,function(res){
                           console.log(res);
                           window.location.reload();
                        });
                        //console.log(formData);
                      }  

            Main.inventory(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.inventory = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });
            Main.makes(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.makes = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });
            Main.reservedCars(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.reservemakes = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });

            Main.soldCars(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.soldmakes = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });
            Main.availableCars(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.availablemakes = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });

            Main.collectedCars(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.collectedmakes = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });

             //record reserved cars
             $scope.reserveCar = function(){
                var formData = {
                   deposit:$scope.deposit,
                   carId: $scope.carId,
                   comment: $scope.comment,
                   dueDate:$scope.dueDate,
                   customerName:$scope.customerName,
                   customerPhone:$scope.customerPhoneNo,
                   userId: $localStorage.adminUserTokens.id,
                };
                
                Main.reserve(formData,function(res){
                  if (res.type == false) {
                       alert(res)
                   } else {
                      window.location.href = "/#/inventory_allmakes";
                       console.log(res); 
                   }
                });
                console.log(formData);
             };

            //record retunred cars to suppliers
             $scope.returnedCar = function(){
                var formData = {
                   carId: $scope.carId,
                   comment: $scope.comment,
                   availability: $scope.availability,
                   userId: $localStorage.adminUserTokens.id,
                };
                
                Main.returned(formData,function(res){
                  if (res.type == false) {
                       alert(res)
                   } else {
                      window.location.href = "/#/inventory_allmakes";
                       console.log(res); 
                   }
                });
                console.log(formData);
             };

            $scope.flagDeleted = function(id){
                        var formData = {
                            carId:id,                    
                        }
                Main.flagAsDeleted(formData,function(res){
                       
                    window.location.href = "/#/inventory_allmakes";
                    console.log(res);
                });
                console.log(formData);
             }

            $scope.flagSold = function(id){
                        var formData = {
                            carId:id, 
                            userId:$localStorage.adminUserTokens.id,
                                             
                        }
                Main.flagSold(formData,function(res){
                       
                        window.location.href = "/#/inventory_allmakes";
                    console.log(res);
                });
                      console.log(formData);
                }

                  $scope.updateInv = function(){
                    var formData = {
                            carId: $scope.carId,   
                            price: $scope.price,   
                            year: $scope.year,    
                            fuel: $scope.fuel,    
                            transmission: $scope.transmission,    
                            doors: $scope.doors,
                            series: $scope.series,   
                            model: $scope.model,   
                            bodyType: $scope.bodyType,    
                            mileage: $scope.mileage, 
                            color: $scope.color,   
                            engine: $scope.engine,
                            condition: $scope.condition,
                            duty: $scope.duty,
                            interior:$scope.interior,
                            driverSetup:$scope.driverSetup,
                            driveType:$scope.driveType,
                                             
                          };
                        
                        /*Main.addInventory(formData,function(res){
                           console.log(res);
                           window.location.reload();
                        });*/
                        console.log(formData);
                      }

                      $scope.updateFeature = function(data){
                        var formData = {
                            update:data,
                        };
                        Main.updateCarFeatures(formData,function(res){
                            console.log(res);
                            window.location.href = "/#/inventory_allmakes";
                        });
                      };

                    $scope.updatePic = function(data){
                        
                        $rootScope.carId = data;
                        window.location.href = "/#/inventory_update_image";
                    
                      };
 
                    $scope.reservationDetails = function(data){
                        var formData = {
                            carId:data,
                        };

                        Main.reserveComments(formData,function(res){
                            $rootScope.reserveComments = res.data;
                            window.location.href = "/#/inventory_reserve_comments";
                            
                        });
                        //console.log(formData);        
                      };

                $scope.markAsAvailable = function(data){
                        var formData = {
                            carId:data,
                        };

                        Main.flagAvailable(formData,function(res){
                           // $rootScope.reserveComments = res.data;
                            window.location.href = "/#/inventory_allmakes";
                            
                        });
                        console.log(formData);        
                      };

                    $scope.returnDetails = function(data){
                        var formData = {
                            carId:data,
                        };

                        Main.returnComments(formData,function(res){
                            $rootScope.returnComments = res.data;
                            window.location.href = "/#/inventory_return_comments";
                            
                        });
                        //console.log(formData);        
                      };



        }])
        .controller('ViewcarController',['$rootScope','$scope','$location','Main',function($rootScope,$scope,$location,Main){
            
            Main.viewCar(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.inventory = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });

        }])
        .controller('ImportsController',['$rootScope','$scope','$location','Main','$uibModal','$log',function($rootScope,$scope,$location,Main,$uibModal, $log){
            $scope.addImport = function(){
                var formData = {
                    name: $scope.name,
                    budget: $scope.budget,
                    year: $scope.year,
                    fuel: $scope.fuel,
                    engine: $scope.engine,   
                    transmission: $scope.transmission, 
                    color: $scope.color,   
                    model: $scope.model,    
                    make: $scope.make, 
                    comments: $scope.comments,
                    uid:  $scope.uid
                };
                Main.addImport(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
                console.log(formData);
            }

            Main.imports(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.imports = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });


            $scope.updateImport = function(){
                var formData = {
                    importId: $scope.imports_Id,
                    status: $scope.status,
                    details: $scope.details,
                };
                Main.updateImports (formData,function(res){
                  console.log(res.data);
                  window.location.reload();

                });


            };


            $scope.update = function(importId)
            {
                $rootScope.imports_Id = importId;
                console.log(importId);
                window.location.href = "/#/imports_update";


            };


        }])

        .controller('ImportersController',['$rootScope','$scope','$location','Main',function($rootScope,$scope,$location,Main){
            $scope.addImporter = function(){
                var formData = {
                    email: $scope.email,
                    name: $scope.name,
                    idNo: $scope.idNo,
                    location: $scope.location,
                    phoneNo: $scope.phoneNo
                };
                Main.addImporter(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
                console.log(formData);
            }
            Main.importers(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.importers = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });

        }])
        .controller('SuppliersController',['$rootScope','$scope','$location','Main',function($rootScope,$scope,$location,Main){
            Main.makes(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.makes = res.data;     
                       console.log(res.data); 
                          }

                }, function() {
                        $rootScope.error = 'Failed to load data from server';
                });
             $scope.isObjectEmpty = function(card){
                  return Object.keys(card).length === 0;
                 }
                $scope.getMakes = function(id,carMake){
                        var formData = {
                            make:id,                  
                        }
                   Main.invByMakeSupp(formData,function(res){
                     if(res.type == false){
                        alert(res.data);
                     }else{
                        $rootScope.makeSuppInventory = res.data;
                        $rootScope.carMake = carMake;
                        window.location.href = "/#/suppliers_inventory_singlemake";
                        //console.log(res.data);
                     }
                   },function(){
                    $rootScope.error = 'Failed to load data from server';
                   });

                }


            $scope.addSupplier = function(){
                var formData = {
                    name: $scope.name,
                    idNo: $scope.idNo,
                    phoneNo: $scope.idNo,
                    email: $scope.email,
                    location : $scope.location,
                    type: $scope.type,
                    companyName: $scope.companyName,
                    contactName: $scope.contactName,
                    address: $scope.address,
                
                }
               
                Main.addSupplier(formData,function(res){
                    console.log(res);
                    window.location.reload();
                });
                //console.log(formData);
            }
            $scope.addSupplierCategory = function(){
                var formData = {
                    category: $scope.category,
                
                }
                Main.addSupplierCategory(formData,function(res){
                    console.log(res);
                    window.location.href = "/#/supplier_landing_page";
                    //window.location.reload();
                });
                console.log(formData);
            }
            $scope.removeSupplierCategory = function(){
                var formData = {
                    categoryId: $scope.category,
                
                }
                Main.deleteSupplierCategory(formData,function(res){
                    console.log(res);
                    window.location.href = "/#/supplier_landing_page";
                   // window.location.reload();
                });
                console.log(formData);
            }


            Main.suppliers(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.allSuppliers = res.data;     
                       console.log(res); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });
            
             Main.suppliersInventory(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.suppliersInventory = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });

             $scope.getSupInventory = function(uid,name){
                var formData = {
                    supplierId:uid,
                };
                Main.supplierInventory(formData,function(res){

                     $rootScope.suppInventory = res.data;  
                     $rootScope.suppName = name;
                    window.location.href = "/#/supplier_manage";
                    console.log(res);
                })
             }

          Main.suppliersCategory(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.categories = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });
        /*Main.suppliersByCategory(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.suppBycategories = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });*/
                $scope.getSuppliers = function(id){
                    var formData = {
                        category:id
                    };

                    Main.suppliersByCategory(formData,function(res){
                     $rootScope.suppliers = res.data;  
                    window.location.href = "/#/suppliers_view";
                    console.log(res);
                })
                    console.log(formData);
                }

                 $scope.go = function(carId){
                   var formData = {
                      id:carId,
                      
                   };

                   Main.invento(formData,function(res){
                     if(res.type == false){
                        alert(res.data);
                     }else{
                        $rootScope.inv = res.data;

                        window.location.href = "/#/suppliers_inventory_singleCar";
                        console.log(res.data);
                     }
                   },function(){
                    $rootScope.error = 'Failed to load data from server';
                   });
            }

        }])

        .controller('SalespeopleController',['$rootScope','$scope','$location','Main',function($rootScope,$scope,$location,Main){
             $scope.addUsers = function(){
                var formData = {
                    email: $scope.email,
                    name: $scope.name,
                    password: $scope.password,
                    user_role: $scope.role,
                    location: $scope.location,
                    phoneNo: $scope.phoneNo,
                    idNo: $scope.idNo,
                    employeeId : $scope.empId,
                    manager : $scope.manager,
                    dob : $scope.dob,
                    hireDate: $scope.hireDate,
                };
                
                Main.registerUser(formData,function(res){
                    console.log(res.data);
                    window.location.reload();
                });
                //console.log(formData);
            }
            $scope.tellme = ['name','self'];
            $scope.getUserEnquiries = function(userId){
              var formData = {
                 userId:userId,
              }
            
              Main.getSalesUserEnquiries(formData,function(res){
                   $rootScope.userEnquiries = res.data;
                    window.location.href = "/#/salespeople_manage";
                    console.log(res.data);
                  
              });
            }

            Main.salespeople(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.users = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });

            $scope.getSingleUser = function(userId){
                var formData = {
                     userId: userId,
                };

               Main.getSingleUser(formData,function(res){
                   $rootScope.userProfile = res.data;
                                
                   window.location.href="/#/salesprofile";
                    console.log(res);
                });
                console.log(formData);
            }

        }])

        .controller('ClientsController',['$rootScope','$scope','$location','Main',function($rootScope,$scope,$location,Main){
            $scope.addClient = function(){
                var formData = {
                    email: $scope.email,
                    org_name: $scope.name,
                    work_phone: $scope.workPhone,
                    first_name: $scope.firstName,
                    last_name:$scope.lastName,
                    phone: $scope.phoneNo
                };
                Main.addClients(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
                //console.log(formData);
            }
            Main.clients(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.clients = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });

        }])
        .controller('ProjectsController',['$rootScope','$scope','$location','$localStorage','Main',function($rootScope,$scope,$location,$localStorage,Main){
           
            
                //console.log($localStorage.adminUserTokens.id);
                var formData = {
                    userId: $localStorage.adminUserTokens.id,
                 };
            Main.getProjects(formData,function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.projects = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });
         




            $scope.addProjects = function(){
                var formData = {
                    userId:$localStorage.adminUserTokens.id,
                    title: $scope.title,
                    project: $scope.project,
                    startDate: $scope.startDate,
                    endDate:$scope.endDate,

                };
                Main.addProjects(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
                //console.log(formData);
            } 

        }])
        .controller('TasksController',['$rootScope','$scope','$location','$localStorage','Main',function($rootScope,$scope,$location,$localStorage,Main){
            var formData = {
                userId:$localStorage.adminUserTokens.id,
            };
            Main.getTasks(formData,function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.tasks = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });


            $scope.addTasks = function(){
                var formData = {
                    userId:$localStorage.adminUserTokens.id,
                    title: $scope.title,
                    task: $scope.task,
                    dueDate: $scope.dueDate,
                   

                };
                Main.addTasks(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
               //console.log(formData);
            } 

        }])
        .controller('EventsController',['$rootScope','$scope','$location','$localStorage','Main',function($rootScope,$scope,$location,$localStorage,Main){
            var formData = {
                userId:$localStorage.adminUserTokens.id,
            };
            Main.getEvents(formData,function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.events = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });


            $scope.addEvents = function(){
                var formData = {
                    userId:$localStorage.adminUserTokens.id,
                    event: $scope.event,
                    title: $scope.title,
                    schedule: $scope.schedule,
                    location: $scope.location,
                   
                };
                Main.addEvents(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
               console.log(formData);
            } 

        }])
       .controller('MilestonesController',['$rootScope','$scope','$location','$localStorage','Main',function($rootScope,$scope,$location,$localStorage,Main){
            var formData = {
                userId:$localStorage.adminUserTokens.id,
            };
            Main.getMilestones(formData,function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.milestones = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });


            $scope.addMilestones = function(){
                var formData = {
                    userId:$localStorage.adminUserTokens.id,
                    milestone: $scope.milestone,
                    title: $scope.title,
                };
                Main.addMilestones(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
               //console.log(formData);
            } 

        }])


        .controller('CrmController',['$rootScope','$scope','$location','Main',function($rootScope,$scope,$location,Main){
             $scope.addEnquiries = function(){
                var formData = {
                    title: $scope.title,
                    enquiry: $scope.enquiry,
                    customerId: $scope.customerId,
                    model: $scope.model,
                    amount: $scope.amount,
                    userId: $scope.salesId,
                    status: $scope.status,
                    regNo: $scope.regNo,
                };
                Main.addEnquiries(formData,function(res){
                  console.log(res);
                  window.location.reload();

                });
                console.log(formData);
            }

            $scope.getEnquiry = function(enquiryId){
               var formData = {
                  enquiryId:enquiryId,
               };

               Main.getCrm(formData,function(res){
                 if(res.type == false){
                    alert(res.data);
                 }else{
                    $rootScope.singleEnquiry = res.data;
                    window.location.href = "/#/enquiries_manage";
                    console.log(res.data);
                 }
               },function(){
                $rootScope.error = 'Failed to load data from server';
               });
            }

            Main.crm(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.enquiries = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });
          Main.clients(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.clients = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });
            Main.salespeople(function(res) {
                if (res.type == false) {
                       alert(res.data)
                   } else {
                       $scope.users = res.data;     
                       console.log(res.data); 
                      }
                    }, function() {
                        $rootScope.error = 'Failed to load data from server';
                    });

              $scope.updateEnq = function(value){
                 var formData = {
                    status : value,
                 };
                Main.updateCrm(formData,function(res){
                    //console.log(res);
                    window.location.reload();
                    //window.location.href = "/#/enquiries_view";
                });
              }


        }]);


/* Setup Rounting For All Pages */
MetronicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/login");  

    $stateProvider
        
       
        
        .state('test', {
            url: "/test",
            templateUrl: "log.html",            

        })
        
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",            
            data: {pageTitle: 'Login Dashboard Template'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/morris/morris.css',                            
                            '../assets/global/plugins/morris/morris.min.js',
                            '../assets/global/plugins/morris/raphael-min.js', 
                            '../assets/global/plugins/jquery.sparkline.min.js',
                            '../assets/global/plugins/flot/jquery.flot.min.js',
                            '../assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js',
                            '../assets/global/plugins/counterup/jquery.waypoints.min.js',

                            '../assets/pages/scripts/dashboard.min.js',
                            'js/controllers/DashboardController.js'
                        ] 
                    });
                }]
            }
        })
        // Dashboard
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",            
            data: {pageTitle: 'Admin Dashboard Template'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/morris/morris.css',                            
                            '../assets/global/plugins/morris/morris.min.js',
                            '../assets/global/plugins/morris/raphael-min.js', 
                            '../assets/global/plugins/jquery.sparkline.min.js',
                            '../assets/global/plugins/flot/jquery.flot.min.js',
                            '../assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js',
                            '../assets/global/plugins/counterup/jquery.waypoints.min.js',

                            '../assets/pages/scripts/dashboard.min.js',
                            'js/controllers/DashboardController.js'
                        ] 
                    });
                }]
            }
        })

        // Blank Page
        .state('blank', {
            url: "/blank",
            templateUrl: "views/blank.html",            
            data: {pageTitle: 'Blank Page Template'},
            controller: "BlankController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [

                            'js/controllers/BlankController.js'
                        ] 
                    });
                }]
            }
        })


        // View All Cars
        .state('inventoryallmakes', {
            url: "/inventory_allmakes",
            templateUrl: "views/inventory/inventory_allmakes.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })

        .state('inventoryavailablemakes', {
            url: "/inventory_available_makes",
            templateUrl: "views/inventory/inventory_available_makes.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })


        .state('inventorycollectedmakes', {
            url: "/inventory_collected_makes",
            templateUrl: "views/inventory/inventory_collected_makes.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })




        // View All Cars
        .state('inventorysinglemake', {
            url: "/inventory_singlemake",
            templateUrl: "views/inventory/inventory_singlemake.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('inventoryreservecomments', {
            url: "/inventory_reserve_comments",
            templateUrl: "views/inventory/inventory_reserve_comments.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('inventoryreturncomments', {
            url: "/inventory_return_comments",
            templateUrl: "views/inventory/inventory_return_comments.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('inventoryreservesinglemake', {
            url: "/inventory_reserve_singlemake",
            templateUrl: "views/inventory/inventory_reserve_singlemake.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })



        .state('inventorysoldsinglemake', {
            url: "/inventory_sold_singlemake",
            templateUrl: "views/inventory/inventory_sold_singlemake.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })

        .state('reservecar', {
            url: "/inventory_reservedcars",
            templateUrl: "views/inventory/inventory_reservedcars.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('soldcar', {
            url: "/inventory_soldcars",
            templateUrl: "views/inventory/inventory_soldcars.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                          
                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        // View All Cars
        .state('inventorysinglecar', {
            url: "/inventory_singlecar",
            templateUrl: "views/inventory/inventory_singlecar.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('inventoryupdateimage', {
            url: "/inventory_update_image",
            templateUrl: "views/inventory/inventory_updateImage.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('inventorystatussinglecar', {
            url: "/inventory_status_singlecar",
            templateUrl: "views/inventory/inventory_status_singlecar.html",            
            data: {pageTitle: 'Inventory View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        // Add A Car
        .state('inventoryadd', {
            url: "/inventory_addCar",
            templateUrl: "views/inventory/inventory_add.html",            
            data: {pageTitle: 'Inventory Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/jquery-multi-select/multi-select.css',
                            '../assets/global/plugins/jquery-multi-select/jquery.multi-select.js',


                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        // Add A Car
        .state('inventorymanage', {
            url: "/inventory_manageCars",
            templateUrl: "views/inventory/inventory_manage.html",            
            data: {pageTitle: 'Inventory Manage'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css',
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            '../assets/global/scripts/datatable.js',
                            '../assets/global/plugins/datatables/datatables.min.js',
                            '../assets/pages/scripts/table-datatables-buttons.min.js',
                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        // View Enquiries 
        .state('enquiriesview', {
            url: "/enquiries_view",
            templateUrl: "views/enquiries/enquiries_view.html",            
            data: {pageTitle: 'Enquiries View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        // Add An Enquiry 
        .state('enquiriesadd', {
            url: "/enquiries_add",
            templateUrl: "views/enquiries/enquiries_add.html",            
            data: {pageTitle: 'Enquiries Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

         // Manage Enquiries 
        .state('enquiriesmanage', {
            url: "/enquiries_manage",
            templateUrl: "views/enquiries/enquiries_manage.html",            
            data: {pageTitle: 'Enquiries Manage'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

         //  View Imports
        .state('importsview', {
            url: "/import_view",
            templateUrl: "views/imports/imports_view.html",            
            data: {pageTitle: 'Imports View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        // Add An Import 
        .state('importsadd', {
            url: "/imports_add",
            templateUrl: "views/imports/imports_add.html",            
            data: {pageTitle: 'Import Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [

                            '../assets/global/plugins/clockface/css/clockface.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            '../assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
                            '../assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',

                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            '../assets/global/plugins/clockface/js/clockface.js',
                            '../assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                            '../assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',

                            '../assets/pages/scripts/components-date-time-pickers.min.js',


                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

         // Manage Imports 
        .state('importsmanage', {
            url: "/imports_manage",
            templateUrl: "views/imports/imports_manage.html",            
            data: {pageTitle: 'Imports Manage'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
         // Manage Imports 
        .state('importsupdate', {
            url: "/imports_update",
            templateUrl: "views/imports/imports_update.html",            
            data: {pageTitle: 'Imports Update'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
         //  View Importers
        .state('importersview', {
            url: "/importers_view",
            templateUrl: "views/importers/importers_view.html",            
            data: {pageTitle: 'Importers View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        // Add An Importer
        .state('importersadd', {
            url: "/importers_add",
            templateUrl: "views/importers/importers_add.html",            
            data: {pageTitle: 'Importers Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

         // Manage Imports 
        .state('importersmanage', {
            url: "/importers_manage",
            templateUrl: "views/importers/importers_manage.html",            
            data: {pageTitle: 'Imports Manage'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        //  View Suppliers
        .state('suppliersview', {
            url: "/suppliers_view",
            templateUrl: "views/suppliers/suppliers_view.html",            
            data: {pageTitle: 'Suppliers View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        // Add A Supplier
        .state('suppliersadd', {
            url: "/suppliers_add",
            templateUrl: "views/suppliers/suppliers_add.html",            
            data: {pageTitle: 'Suppliers Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })

        .state('supplierscategoryremove', {
            url: "/suppliers_category_remove",
            templateUrl: "views/suppliers/suppliers_category_remove.html",            
            data: {pageTitle: 'Suppliers Category Remove'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })

        .state('suppliersinventoryadd', {
            url: "/suppliers_inventory_add",
            templateUrl: "views/suppliers/suppliers_inventory_add.html",            
            data: {pageTitle: 'Suppliers Inventory Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })

        .state('suppliersinventorysinglecar', {
            url: "/suppliers_inventory_singleCar",
            templateUrl: "views/suppliers/suppliers_inventory_singleCar.html",            
            data: {pageTitle: 'Suppliers Inventory SingleCar'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
        .state('suppliersinventorysinglemake', {
            url: "/suppliers_inventory_singlemake",
            templateUrl: "views/suppliers/suppliers_inventory_singlemake.html",            
            data: {pageTitle: 'Suppliers Inventory Add'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GigiController.js'
                        ]
                    });
                }]
            }
        })
         // Manage Suppliers 
        .state('suppliersmanage', {
            url: "/suppliers_manage",
            templateUrl: "views/suppliers/suppliers_manage.html",            
            data: {pageTitle: 'Suppliers Manage'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
        .state('suppliermanage', {
            url: "/supplier_manage",
            templateUrl: "views/suppliers/supplier_manage.html",            
            data: {pageTitle: 'Suppliers Manage'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
        .state('supplierlandingpage', {
            url: "/supplier_landing_page",
            templateUrl: "views/suppliers/suppliers_landingPage.html",            
            data: {pageTitle: 'Suppliers Categories'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
        .state('supplierscategoryadd', {
            url: "/suppliers_category_add",
            templateUrl: "views/suppliers/suppliersCategory_add.html",            
            data: {pageTitle: 'Add Supplier Category'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/pages/scripts/form-samples.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
        //  View Trade In
        .state('tradeinview', {
            url: "/tradein",
            templateUrl: "views/suppliers/trade_in.html",            
            data: {pageTitle: 'Trade In View'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

        //  View salespeople
        .state('salespeopleview', {
            url: "/salespeople_view",
            templateUrl: "views/salespeople/salespeople_view.html",            
            data: {pageTitle: 'View Salespeople'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
        //  View salespeople

        //  Add salespeople
        .state('salespeopleadd', {
            url: "/salespeople_add",
            templateUrl: "views/salespeople/salespeople_add.html",            
            data: {pageTitle: 'Add Salespeople'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/pages/scripts/form-samples.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

         //  Manage salespeople
        .state('salespeoplemanage', {
            url: "/salespeople_manage",
            templateUrl: "views/salespeople/salespeople_manage.html",            
            data: {pageTitle: 'Manage Salespeople'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })


        //  View salespeople
        .state('customersview', {
            url: "/customers_view",
            templateUrl: "views/customers/customers_view.html",            
            data: {pageTitle: 'View Customers'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })
        
        //  View one of the salespeople
        .state('salesprofile', {
            url: "/salesprofile",
            templateUrl: "views/salespeople/profile/salespeople_view_single.html",            
            data: {pageTitle: 'View Single Salesperson'},
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            '../assets/pages/css/profile.css',
                            
                            '../assets/global/plugins/jquery.sparkline.min.js',
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                            '../assets/pages/scripts/profile.min.js',

                            'js/controllers/UserProfileController.js'

                        ] 
                    });
                }]
            }
        })

        // User Profile Dashboard
        .state("salesprofile.dashboard", {
            url: "/salesprofile.dashboard",
            templateUrl: "views/salespeople/profile/dashboard.html",
            data: {pageTitle: 'User Profile'}
        })


        // User Profile Account
        .state("salesprofile.account", {
            url: "/salesaccount",
            templateUrl: "views/salespeople/profile/account.html",
            data: {pageTitle: 'User Account'}
        })

        // User Profile Help
        .state("salesprofile.help", {
            url: "/saleshelp",
            templateUrl: "views/salespeople/profile/help.html",
            data: {pageTitle: 'User Help'}      
        })


        //  Add salespeople
        .state('customersadd', {
            url: "/customers_add",
            templateUrl: "views/customers/customers_add.html",            
            data: {pageTitle: 'Add Customers'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/pages/scripts/form-samples.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })

         //  Manage salespeople
        .state('customersmanage', {
            url: "/salespeople_manage",
            templateUrl: "views/salespeople/salespeople_manage.html",            
            data: {pageTitle: 'Manage Salespeople'},
            controller: "GigiController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-editable.min.js',

                            'js/controllers/GigiController.js'
                        ] 
                    });
                }]
            }
        })


        // AngularJS plugins
        .state('fileupload', {
            url: "/file_upload.html",
            templateUrl: "views/file_upload.html",
            data: {pageTitle: 'AngularJS File Upload'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'angularFileUpload',
                        files: [
                            '../assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                        ] 
                    }, {
                        name: 'MetronicApp',
                        files: [
                            'js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // UI Select
        .state('uiselect', {
            url: "/ui_select.html",
            templateUrl: "views/ui_select.html",
            data: {pageTitle: 'AngularJS Ui Select'},
            controller: "UISelectController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ui.select',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ] 
                    }, {
                        name: 'MetronicApp',
                        files: [
                            'js/controllers/UISelectController.js'
                        ] 
                    }]);
                }]
            }
        })

        // UI Bootstrap
        .state('uibootstrap', {
            url: "/ui_bootstrap.html",
            templateUrl: "views/ui_bootstrap.html",
            data: {pageTitle: 'AngularJS UI Bootstrap'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        files: [
                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })

        // Tree View
        .state('tree', {
            url: "/tree",
            templateUrl: "views/tree.html",
            data: {pageTitle: 'jQuery Tree View'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/jstree/dist/themes/default/style.min.css',

                            '../assets/global/plugins/jstree/dist/jstree.min.js',
                            '../assets/pages/scripts/ui-tree.min.js',
                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })     

        // Form Tools
        .state('formtools', {
            url: "/form-tools",
            templateUrl: "views/form_tools.html",
            data: {pageTitle: 'Form Tools'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            '../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                            '../assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                            '../assets/global/plugins/typeahead/typeahead.css',

                            '../assets/global/plugins/fuelux/js/spinner.min.js',
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                            '../assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                            '../assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                            '../assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                            '../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                            '../assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            '../assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                            '../assets/global/plugins/typeahead/handlebars.min.js',
                            '../assets/global/plugins/typeahead/typeahead.bundle.min.js',
                            '../assets/pages/scripts/components-form-tools-2.min.js',

                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })        

        // Date & Time Pickers
        .state('pickers', {
            url: "/pickers",
            templateUrl: "views/pickers.html",
            data: {pageTitle: 'Date & Time Pickers'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/clockface/css/clockface.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            '../assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
                            '../assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',

                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            '../assets/global/plugins/clockface/js/clockface.js',
                            '../assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                            '../assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',

                            '../assets/pages/scripts/components-date-time-pickers.min.js',

                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })

        // Custom Dropdowns
        .state('dropdowns', {
            url: "/dropdowns",
            templateUrl: "views/dropdowns.html",
            data: {pageTitle: 'Custom Dropdowns'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
                            '../assets/global/plugins/select2/css/select2.min.css',
                            '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                            '../assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
                            '../assets/global/plugins/select2/js/select2.full.min.js',

                            '../assets/pages/scripts/components-bootstrap-select.min.js',
                            '../assets/pages/scripts/components-select2.min.js',

                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        }) 

        // Advanced Datatables
        .state('datatablesmanaged', {
            url: "/datatables/managed.html",
            templateUrl: "views/datatables/managed.html",
            data: {pageTitle: 'Advanced Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // Ajax Datetables
        .state('datatablesajax', {
            url: "/datatables/ajax.html",
            templateUrl: "views/datatables/ajax.html",
            data: {pageTitle: 'Ajax Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/scripts/datatable.js',

                            'js/scripts/table-ajax.js',
                            'js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // User Profile
        .state("profile", {
            url: "/profile",
            templateUrl: "views/profile/main.html",
            data: {pageTitle: 'User Profile'},
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'MetronicApp',  
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            '../assets/pages/css/profile.css',
                            
                            '../assets/global/plugins/jquery.sparkline.min.js',
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                            '../assets/pages/scripts/profile.min.js',

                            'js/controllers/UserProfileController.js'
                        ]                    
                    });
                }]
            }
        })

        // User Profile Dashboard
        .state("profile.dashboard", {
            url: "/profile.dashboard",
            templateUrl: "views/profile/dashboard.html",
            data: {pageTitle: 'User Profile'}
        })


        // User Profile Account
        .state("profile.account", {
            url: "/account",
            templateUrl: "views/profile/account.html",
            data: {pageTitle: 'User Account'}
        })

        // User Profile Help
        .state("profile.help", {
            url: "/help",
            templateUrl: "views/profile/help.html",
            data: {pageTitle: 'User Help'}      
        })

        // Todo
        .state('todo', {
            url: "/todo",
            templateUrl: "views/todo.html",
            data: {pageTitle: 'Todo'},
            controller: "TodoController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({ 
                        name: 'MetronicApp',  
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/apps/css/todo-2.css',
                            '../assets/global/plugins/select2/css/select2.min.css',
                            '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                            '../assets/global/plugins/select2/js/select2.full.min.js',
                            
                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',

                            '../assets/apps/scripts/todo-2.min.js',

                            'js/controllers/TodoController.js'  
                        ]                    
                    });
                }]
            }
        })

}]);




/* Init global settings and run the app */
MetronicApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
}]);

/*
when ever we need to make a request to the server on the protected routes,the token needs to be out in the authorization header.
angularJS interceptors are used to hijack the request and insert the bearer token to the authorization header field

*/

// $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
//     return {
//         'request': function (config) {
//             config.headers = config.headers || {};
//             if ($localStorage.token) {
//                 config.headers.Authorization = 'Bearer ' + $localStorage.token;
//             }
//             return config;
//         },
//         'responseError': function(response) {
//             if(response.status === 401 || response.status === 403) {
//                 $location.path('/signin');
//             }
//             return $q.reject(response);
//         }
//     };
// }]);