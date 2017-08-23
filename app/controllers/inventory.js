
var mysql = require('mysql');
var dateTime = require('node-datetime');
var shortId = require('shortid');
var multer = require('multer');
var path = require('path');

//mysql connection 
    pool = mysql.createPool({
    	host : 'localhost',
    	user : 'root',
    	password : 'skye2016',
    	database : 'ninja',
    }); 


var baseDir = __dirname.substring(0,__dirname.length - 11)+'public'+"/"+'uploads'; 


exports.welcome = function(req,res){
  res.render('upload'); 
}

exports.getData = function(req,res){
 
    var query = 'SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id ORDER BY id DESC';
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          
          res.send({
            'error':false,
            'message':'Fetching all inventory data',
            'data':rows,
          });
    });

}
exports.getInvData = function(req,res){
   var id = req.body.id;
   var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts.leatherInterior,posts.powerSteering,posts.steeringControls,posts.keylessEntry,posts.pushToStart,posts.sunRoof,posts.manual,posts.reverseCamera,posts.lowMileage,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts_meta.post_id ='"+id+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
           for(var i in rows){
              res.send({
                'error':false,
                'message':'Fetching inventory data',
                'data':rows[i],
               });
           }
          
 
    });

}

exports.getByMake = function(req,res){
    var makeId = req.body.id;
    var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts.make ='"+makeId+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching inventory data',
            'data':rows,
          });
    });
} 

exports.getByStatus = function(req,res){
    var makeId = req.body.id;
        status = req.body.status;
    var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts.make ='"+makeId+"' AND posts_meta.status='"+status+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching reserved car inventory data',
            'data':rows,
          });
    });
}
exports.getByMakeModel = function(req,res){
    var makeId = req.body.id;
        model = req.body.model;
    var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts_meta.model ='"+model+"' AND posts.make='"+makeId+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          
          res.send({
            'error':false,
            'message':'Fetching inventory data',
            'data':rows,
          });
    });

}


getPostMeta = (ids,rows)=>{
    var metaData = [];
    var pending = ids.length;
    var data;

    for(var i in ids){
        //SELECT post_id,meta_key,meta_value FROM posts_meta WHERE post_id = ?
        var getMetaQuery = 'SELECT post_id,meta_key,meta_value FROM posts_meta';
        pool.query(getMetaQuery,[ids[i]],function(error,meta,fields){
             
            //metaData.push(meta);
            //console.log(metaData);
      
        });
    }

};


exports.addInventory = function(req,res){
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,baseDir)
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-'+Date.now()+'-'+ file.originalname)
      }
    })

    var upload = multer({storage: storage}).array('imgUploader',1);


            upload(req,res,function(err){
                if(err){
                    return res.send({
                        'message':'something went wrong',
                        'err':err,

                    });
                }

     
                var imageFiles = req.files;
                var img="";
                for(var i in imageFiles){
                    img = imageFiles[i].filename;

                    }
                  
                  var carMake = req.body.make;
                      m = carMake.split('_');

                  var post_name = req.body.post_name;
                      post_content = req.body.post_content;
                      post_date = dateTime.create().format('Y-m-d H:M:S');
                      make =m[0];
                      regNo = req.body.regNo;
                      price = req.body.price;
                      fabricationYear = req.body.year;
                      fuel = req.body.fuel;
                      engine = req.body.engine;
                      transmission = req.body.transmission;
                      doors = req.body.doors;
                      color = req.body.color;
                      model = req.body.model;
                      bodyType = req.body.bodyType;
                      mileage = req.body.mileage;
                      imgUrl = img;
                      
                      series = req.body.series;
                      carCondition = req.body.condition;
                      duty = req.body.duty;
                      interior = req.body.interior;
                      //driverSetup = req.body.driverSetup;
                      supplier = req.body.supplier;
                      driverType = req.body.driveType;

    var post_values = {post_name:post_name,post_content,post_content,post_date:post_date};

    var queryString = "INSERT INTO posts (make,post_name,post_content,post_date,supplier) VALUES ('"+make+"','"+post_name+"','"+post_content+"','"+post_date+"','"+supplier+"')";
    
        pool.query(queryString,function(err,response){
            if(err){
              console.log(err);
            }
                
                 //res.send({'err':true,'message':err});
 
            var metaQueryData = [response.insertId,price,fabricationYear,fuel,engine,transmission,doors,color,model,bodyType,mileage,imgUrl,series,carCondition,duty,interior,driverType,regNo];
            var metaQuery = "INSERT INTO posts_meta (post_id,price,fabricationYear,fuel,engine,transmission,doors,color,model,bodyType,mileage,imgUrl,series,carCondition,duty,interior,driverType,regNo) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            pool.query(metaQuery,metaQueryData,function(err,result){
                if(err){
                   console.log(err);
                   return res.send({'err':true,'message':err});
                }else{
                    var product_key = post_name;
                        notes = post_content;
                        cost = price;
                        user_id = '1';
                        account_id = '1';
                        created_at = dateTime.create().format('Y-m-d H:M:S');
                        updated_at = dateTime.create().format('Y-m-d H:M:S');
                        public_id = '234';

                    var productsQueryData = [account_id,user_id,created_at,updated_at,product_key,notes,cost,public_id];
                        productsQueryString = "INSERT INTO products(account_id,user_id,created_at,updated_at,product_key,notes,cost,public_id) VALUES(?,?,?,?,?,?,?,?)";
                        
                        pool.query(productsQueryString,productsQueryData,function(err,p_result){
                            if(err){
                                res.send({
                                    'err':err,
                                    'message':err
                               });
                            }else{
                              product_id = p_result.insertId;
                               var updateProductQuery = "UPDATE products SET public_id = '"+product_id+"' WHERE products.id = '"+product_id+"'";                              
                                   pool.query(updateProductQuery,function(err,result){
                                      if(err){
                                        console.log(err);
                                        return res.send({'err':true,'message':err});
                                      }else{
                                          res.redirect('/#/inventory_allmakes');
                                      }
                            });

                           }
                        });     
                }
                   

                
            });
            
        });
                 
      });

};

exports.getSuppliers = function(req,res){
    var queryString = 'SELECT * FROM affiliates_supp ORDER BY id DESC';
        pool.query(queryString,function(err,result,fields){
            if(err){
                res.send({
                    'error':true,
                    'message':'Unable to retrive suppliers',
                });
            }else{
                res.send({
                    'error':false,
                    'message':'All Suppliers',
                    'data':result,
                });
            }
        });
}
exports.addSupplier = function(req,res){
    var name = req.body.name;
        idNo = req.body.idNo;
        phoneNo = req.body.phoneNo;
        email = req.body.email;
        location = req.body.location;
        photo = "http://cdn.ecomento.com/wp-content/uploads/2015/04/Electric-Car-Salesman-1-740x425.jpg";
        uniqueCode = shortId.generate() +'_'+randomIntInc(100000,9999999999);

        type = req.body.type;
        companyName = req.body.companyName;
        contactName = req.body.contactName;
        address = req.body.address;
        //county = req.body.county;


    var queryString = "INSERT INTO affiliates_supp (name,idNo,uId,phoneNo,email,location,type,companyName,contactName,address) VALUES (?,?,?,?,?,?,?,?,?,?)";
        queryStringData = [name,idNo,uniqueCode,phoneNo,email,location,type,companyName,contactName,address];

        pool.query(queryString,queryStringData,function(err,result,fields){
            if(err){
                res.send({
                    'error':true,
                    'message':'Error in adding new supplier',
                });
                console.log(err);
            }else{
                //insert successsfull
                res.send({
                    'error':false,
                    'message':'Supplier added Successsfully',
                });
            }
        });

};

exports.getSuppliersInventory = function(req,res) {
    var query = 'SELECT affiliate_posts.ID,affiliate_posts.affiliateUid,affiliate_posts.post_name,affiliate_posts.post_content,affiliate_posts_meta.post_id,affiliate_posts_meta.price,affiliate_posts_meta.fabricationYear,affiliate_posts_meta.fuel,affiliate_posts_meta.engine,affiliate_posts_meta.transmission,affiliate_posts_meta.doors,affiliate_posts_meta.color,affiliate_posts_meta.model,affiliate_posts_meta.bodyType,affiliate_posts_meta.mileage,affiliate_posts_meta.imgUrl,affiliates_supp.name,affiliates_supp.phoneNo,affiliates_supp.location FROM affiliate_posts,affiliate_posts_meta,affiliates_supp WHERE affiliate_posts.ID = affiliate_posts_meta.post_id AND affiliate_posts.affiliateUid=affiliates_supp.uId';
    //var query = 'SELECT affiliate_posts.ID,affiliate_posts.affiliateUid,affiliate_posts.post_name,affiliate_posts.post_content,affiliate_posts_meta.post_id,affiliate_posts_meta.price,affiliate_posts_meta.fabricationYear,affiliate_posts_meta.fuel,affiliate_posts_meta.engine,affiliate_posts_meta.transmission,affiliate_posts_meta.doors,affiliate_posts_meta.color,affiliate_posts_meta.model,affiliate_posts_meta.bodyType,affiliate_posts_meta.mileage,affiliate_posts_meta.imgUrl,affiliates_supp.name,affiliates_supp.phoneNo,affiliates_supp.location FROM affiliate_posts,affiliate_posts_meta,affiliates_supp WHERE affiliate_posts.ID = affiliate_posts_meta.post_id AND affiliate_posts.affiliateUid=affiliates_supp.uId';
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching all supplier inventory data',
            'data':rows,
          });
    });
    
}
exports.addSupplierInventory = function(req,res){
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,baseDir)
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-'+Date.now()+'-'+ file.originalname)
      }
    })

    var upload = multer({storage: storage}).array('imgUploader',1);

            upload(req,res,function(err){
                if(err){
                    return res.send({
                        'message':'something went wrong',
                        'err':err,

                    });
                }

     
                var imageFiles = req.files;
                var imgUrl="";
                for(var i in imageFiles){
                    imgUrl = imageFiles[i].filename;

                    }
                  
          var affliateUid = req.body.supplierUid;
              post_name = req.body.post_name;
              post_content = req.body.post_content;
              post_date = dateTime.create().format('Y-m-d H:M:S');

              price = req.body.price;
              fabricationYear = req.body.year;
              fuel = req.body.fuel;
              engine = req.body.engine;
              transmission = req.body.transmission;
              doors = req.body.doors;
              color = req.body.color;
              model = req.body.model;
              bodyType = req.body.bodyType;
              mileage = req.body.mileage;

    var queryStringData = [affliateUid,post_name,post_content,post_date];
    var queryString = "INSERT INTO affiliate_posts (affiliateUid,post_name,post_content,post_date) VALUES (?,?,?,?)";

       pool.query(queryString,queryStringData,function(err,response){
            if(err)
                console.log(err);
               

            var metaQueryData = [response.insertId,price,fabricationYear,fuel,engine,transmission,doors,color,model,bodyType,mileage,imgUrl];
            var metaQuery = "INSERT INTO affiliate_posts_meta (post_id,price,fabricationYear,fuel,engine,transmission,doors,color,model,bodyType,mileage,imgUrl) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
                pool.query(metaQuery,metaQueryData,function(err,result){
                    if(err){
                        res.send({
                            'error':false,
                            'message':'Car details not added',
                        });
                      }else{
                           /* var product_key = post_name;
                                notes = post_content;
                                cost = price;
                                user_id = '1';
                                account_id = '1';
                                created_at = dateTime.create().format('Y-m-d H:M:S');
                                updated_at = dateTime.create().format('Y-m-d H:M:S');
                           
                            var productsQueryData = [account_id,user_id,created_at,updated_at,product_key,notes,cost];
                                productsQueryString = "INSERT INTO products(account_id,user_id,created_at,updated_at,product_key,notes,cost) VALUES(?,?,?,?,?,?,?)";
                                
                                pool.query(productsQueryString,productsQueryData,function(err,p_result){
                                    if(err){
                                       return res.send({
                                            'err':err,
                                            'message':err
                                       });
                                    }else{
                                      product_id = p_result.insertId;
                                       var updateProductQuery = "UPDATE products SET public_id = '"+product_id+"' WHERE products.id = '"+product_id+"'";                              
                                           pool.query(updateProductQuery,function(err,result){
                                              if(err){
                                                console.log(err);
                                                return res.send({'err':true,'message':err});
                                              }else{
                                                 res.redirect('/#/suppliers_inventory_add');
                                              }
                                    });

                                   }
                                }); */

                                res.redirect('/#/suppliers_inventory_add');
                      }  

                      //res.redirect('/#/suppliers_inventory_add');
                });

        });

                 
      });
         
}

exports.getSupplier = function(req,res){

  var supplierId = req.body.supplierId;
  var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts.supplier,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE  posts.supplier = '"+supplierId+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching Supplier inventory data',
            'data':rows,
          });
    });

  //var uid = req.param('uid');
  /*var uid = req.body.uid;
  var query = "SELECT affiliate_posts.ID,affiliate_posts.affiliateUid,affiliate_posts.post_name,affiliate_posts.post_content,affiliate_posts_meta.post_id,affiliate_posts_meta.price,affiliate_posts_meta.fabricationYear,affiliate_posts_meta.fuel,affiliate_posts_meta.engine,affiliate_posts_meta.transmission,affiliate_posts_meta.doors,affiliate_posts_meta.color,affiliate_posts_meta.model,affiliate_posts_meta.bodyType,affiliate_posts_meta.mileage,affiliate_posts_meta.imgUrl FROM affiliate_posts INNER JOIN affiliate_posts_meta ON affiliate_posts.ID = affiliate_posts_meta.post_id WHERE affiliate_posts.affiliateUid = '"+uid+"' ";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }

          
          res.send({
            'error':false,
            'message':'Fetching all supplier inventory data',
            'data':rows,
          });
    });*/
  

};

randomIntInc = (low,high)=>{
     return Math.floor(Math.random() * (high - low + 1) + low);
};

exports.statistics = function(req,res){
  var getInventory = getTototalInventory();
  res.send({
    'err':false,
    'data':getInventory,
  });
};

exports.getallMakes = function(req,res){
   var invQueryString = "SELECT * FROM make";
      pool.query(invQueryString,function(err,response){
         if(err){
            return console.log(err);
         }else{
           res.send({
            'error':false,
            'messsage':'Returning all car makes',
            'data':response,
           });
         }
      }); 
};

exports.getReservedCars = function(req,res,next){
  //var queryString = "SELECT * FROM reservedcars";
  var queryString = 'SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType,reservedcars.deposit,reservedcars.comment,reservedcars.customerName,reservedcars.customerPhoneNo,reservedcars.dueDate FROM posts,posts_meta,reservedcars WHERE posts.ID = posts_meta.post_id AND reservedcars.carId=posts_meta.post_id AND posts_meta.status = "Reserved" ORDER BY id DESC';
      pool.query(queryString,function(err,result){
         if(err){
           res.send({
            'error':true,
            'message':'Could not get reserved cars' + err,
           });
         }else{
            res.send({
              'error':false,
              'message':'Returning all reserved cars',
              'data':result
            });
         }
      });
};

exports.reserve = function(req,res,next){
  var carId = req.body.carId;
      userId = req.body.userId;
      deposit = req.body.deposit;
      comment = req.body.comment;
      dueDate = req.body.dueDate;
      customerName = req.body.customerName;
      customerPhone = req.body.customerPhone;
      created_at = dateTime.create().format('Y-m-d H:M:S');

      queryStringData = [carId,userId,deposit,comment,dueDate,customerName,customerPhone,created_at];
      queryString = "INSERT INTO reservedCars (carId,userId,deposit,comment,dueDate,customerName,customerPhoneNo,created_at) VALUES (?,?,?,?,?,?,?,?)";
          
      pool.query(queryString,queryStringData,function(err,response){
        if(err){
          console.log("Could not reserve car"+err);
        }else{
          //update the car status in post meta
          var status = "Reserved";
              updateQueryString = "UPDATE posts_meta SET status = '"+status+"' WHERE post_id = '"+carId+"'"; 
              
              pool.query(updateQueryString,function(err,update_response){
                if(err){
                  console.log("status update err" + err);
                  res.send({
                    'error':true,
                    'messsage':err
                  });
                }else{
                  res.send({
                    'error':false,
                    'message':'Car has been reserved',

                  });
                }
              });
        }
      });
      
};

exports.getSoldCars = function(req,res,next){
    //var queryString = "SELECT * FROM sold";
    var queryString = 'SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts,posts_meta,sold WHERE posts.ID = posts_meta.post_id AND sold.carId=posts_meta.post_id AND posts_meta.status = "Sold" ORDER BY id DESC';
      pool.query(queryString,function(err,result){
         if(err){
           res.send({
            'error':true,
            'message':'Could not get reserved cars' + err,
           });
         }else{
            res.send({
              'error':false,
              'message':'Returning all sold cars',
              'data':result
            });
         }
      });
};
exports.sold = function(req,res,next){
  var userId = req.body.userId;
      carId = req.body.carId;
      status = "Sold";
      created_at = dateTime.create().format('Y-m-d H:M:S');
      
      queryStringData = [userId,carId,created_at];
      queryString =  "INSERT INTO sold (userId,carId,created_at) VALUES (?,?,?)";
      pool.query(queryString,queryStringData,function(err,response){
        if(err){
          console.log("Flagging car as sold failed" + err);
        }else{
          //update the car status in post meta
              updateQueryString = "UPDATE posts_meta SET status = '"+status+"' WHERE post_id = '"+carId+"'"; 
              
              pool.query(updateQueryString,function(err,update_response){
                if(err){
                  console.log("status update err" + err);
                  res.send({
                    'error':true,
                    'messsage':err
                  });
                }else{
                  res.send({
                    'error':false,
                    'message':'Car has been Flagged as sold',

                  });
                }
              });
        }
      });
};

exports.carsReturnedToSupp = function(req,res,next){
  var queryString = 'SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType,returnedcars.comment FROM posts,posts_meta,returnedcars WHERE posts.ID = posts_meta.post_id AND returnedcars.carId=posts_meta.post_id AND posts_meta.status = "Collected" ORDER BY id DESC';
         pool.query(queryString,function(err,result){
         if(err){
           res.send({
            'error':true,
            'message':'Could not get cars returned to supplier' + err,
           });
         }else{
            res.send({
              'error':false,
              'message':'Returning all cars returned to supplier',
              'data':result
            });
         }
      });

};
exports.returnedToSupplier = function(req,res,next){
   var userId = req.body.userId;
       carId = req.body.carId;
       comment = req.body.comment;
       availability = req.body.availability;
       status = "collected";
       created_at = dateTime.create().format('Y-m-d H:M:S');
      
      queryStringData = [userId,carId,comment,status,created_at];
      queryString =  "INSERT INTO returnedCars (userId,carId,comment,status,created_at) VALUES (?,?,?,?,?)";
      pool.query(queryString,queryStringData,function(err,response){
        if(err){
          console.log("Flagging car as returned to supplier failed" + err);
        }else{
          //update the car status in post meta
              updateQueryString = "UPDATE posts_meta SET status = '"+status+"' WHERE post_id = '"+carId+"'"; 
              
              pool.query(updateQueryString,function(err,update_response){
                if(err){
                  console.log("status update err" + err);
                  res.send({
                    'error':true,
                    'messsage':err
                  });
                }else{
                  res.send({
                    'error':false,
                    'message':'Car has been Flagged as returned to supplier',
            
                  });
                }
              });
        }
      }); 
};


exports.updateInventory = function(req,res,next){
      var carId = req.body.carId;
         // make = req.body.make;
          price = req.body.price;
          fabricationYear = req.body.year;
          fuel = req.body.fuel;
          engine = req.body.engine;
          transmission = req.body.transmission;
          doors = req.body.doors;
          color = req.body.color;
          model = req.body.model;
          bodyType = req.body.bodyType;
          mileage = req.body.mileage;                 
          series = req.body.series;
          carCondition = req.body.condition;
          duty = req.body.duty;
          interior = req.body.interior;
          driverSetup = req.body.driverSetup;
          driverType = req.body.driveType;
          regNo = req.body.regNo;

          updateQueryString = "UPDATE posts_meta SET price = '"+price+"',regNo = '"+regNo+"',fabricationYear='"+fabricationYear+"',fuel='"+fuel+"',engine='"+engine+"',transmission='"+transmission+"',doors='"+doors+"',color='"+color+"',model='"+model+"',bodyType='"+bodyType+"',mileage='"+mileage+"',series='"+series+"',carCondition='"+carCondition+"',duty='"+duty+"',interior='"+interior+"',driverSetup='"+driverSetup+"',driverType='"+driverType+"' WHERE post_id = '"+carId+"'"; 
              
          pool.query(updateQueryString,function(err,update_response){
                if(err){
                  console.log("Car update err" + err);
                  res.send({
                    'error':true,
                    'messsage':'Updating car data failed' + err,
                    'query':updateQueryString,
                  });
                }else{
                  /*res.send({
                    'error':false,
                    'message':'Car has been successsfully updated',
            
                  });*/
                  res.redirect('/#/inventory_allmakes');
                }
              });
};

exports.suppliersByCategory = function(req,res,next){
    var category = req.body.category;
    var queryString = "SELECT * FROM affiliates_supp WHERE type ='"+category+"' ORDER BY id DESC";
        pool.query(queryString,function(err,result,fields){
            if(err){
                res.send({
                    'error':true,
                    'message':'Unable to retrive suppliers',
                });
            }else{
                res.send({
                    'error':false,
                    'message':'All Suppliers by category',
                    'data':result,
                });
            }
        });
};
exports.getSupplierCategories = function(req,res,next){
  queryString = "SELECT * FROM suppliercategories ORDER BY id DESC";
  pool.query(queryString,function(err,result){
    if(err){
      consoloe.log('Cannot get supplier categories' + err);
    }else{
      res.send({
        'error':false,
        'message':'Returning all supplier categories',
        'data':result,
      });
    }
  });
};
exports.addSuppCategory = function(req,res,next){
  var category = req.body.category;
       queryStringData = [category];
       queryString = "INSERT INTO suppliercategories(category) VALUES(?)";

       pool.query(queryString,queryStringData,function(err,response){
         if(err){
           console.log(err);
         }else{
            res.send({
              'error':false,
              'message':'Added supplier category',
            });
         }
       });
};


exports.updateFeatures = function(req,res,next){

 var  update = req.body.update;
      info = update.split('_');
      id = info[0];
      field = info[1];

      queryString = "UPDATE posts SET "+field+" = 0 WHERE id='"+id+"'";
      pool.query(queryString,function(err,response){
        if(err){
          console.log("Unnable to update car feature" + err);
        }else{
          res.send({
            'error':false,
            'message':"Updated car feature"
          });
        }
      });


};

exports.updateImage = function(req,res,next){
   var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,baseDir)
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-'+Date.now()+'-'+ file.originalname)
      }
    })
 
  var upload = multer({storage: storage}).array('imgUploader',1);
              upload(req,res,function(err){
                if(err){
                    return res.send({
                        'message':'something went wrong',
                        'err':err,

                    });
                }else{
                 var imageFiles = req.files;
                  var img="";
                  for(var i in imageFiles){
                      img = imageFiles[i].filename;

                      }
                    
                    var carId = req.body.carId;

                  queryString = "UPDATE posts_meta SET imgUrl = '"+img+"' WHERE post_id='"+carId+"'";
                  pool.query(queryString,function(err,response){
                    if(err){
                      console.log("Unnable to update car feature" + err);
                    }else{
                       res.redirect('/#/inventory_allmakes');
                     
                    }
                  });

                }
      });
};


exports.reserveComments = function(req,res,next){
  var carId = req.body.carId;
      queryString = "SELECT * FROM reservedcars WHERE carId='"+carId+"'";
      pool.query(queryString,function(err,result){
        if(err){
          console.log(err);
        }else{
          res.send({
            'error':false,
            'data':result
          });
        }
      });
};
exports.returnComments = function(req,res,next){
  var carId = req.body.carId;
      queryString = "SELECT * FROM returnedcars WHERE carId='"+carId+"'";
      pool.query(queryString,function(err,result){
        if(err){
          console.log(err);
        }else{
          res.send({
            'error':false,
            'data':result
          });
        }
      });
};
exports.getAvailableCars = function(req,res,next){
     var status = "Available";
      queryString = 'SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts,posts_meta WHERE posts.ID = posts_meta.post_id AND posts_meta.status="'+status+'" ORDER BY id DESC';
      pool.query(queryString,function(err,result){
         if(err){
           res.send({
            'error':true,
            'message':'Could not get available cars' + err,
           });
         }else{
            res.send({
              'error':false,
              'message':'Returning all available cars',
              'data':result
            });
         }
      }); 
};

exports.deleteCar = function(req,res,next){
  var carId = req.body.carId;
      queryString = 'DELETE FROM posts WHERE id="'+carId+'"';
      pool.query(queryString,function(err,response){
        if(err){
          console.log('Del Error occured while deleting on post' + err);
          res.send({
            'error':'true',
            'data':'Del Error occured while deleting on post',
          });
        }else{
          queryString2 = 'DELETE FROM posts_meta WHERE post_id="'+carId+'"';
          pool.query(queryString2,function(err,responz){
          if(err){
            console.log('Del Error' + err);
            res.send({
              'error':'true',
              'data':'Del Error occured while deleting on posts_meta' + err,
            });
        }else{
           res.send({
               'error':false,
               'data':'Car was successsfully deleted',
            });
        }
      });
 
    }
   });

};

exports.makeAvailableAgain = (req,res,next)=>{
  var carId = req.body.carId;
      status = "Available";
      queryString = "UPDATE posts_meta SET status = '"+status+"' WHERE post_id='"+carId+"'";

      pool.query(queryString,function(err,response){
        if(err){
          res.send({
            'error':true,
            'message':'Failed to update Collected car status to available',
          });
        }else{
          res.send({
            'error':false,
            'message':'Collected car status updated to available',
          });
        }
      });
};

exports.deleteSuppCategories = (req,res,next)=>{
  var categoryId = req.body.categoryId;
      queryString = 'DELETE FROM suppliercategories WHERE id="'+categoryId+'"';
      pool.query(queryString,function(err,response){
          if(err){
          res.send({
            'error':true,
            'message':'Failed to delete Cotegory' + err,
          });
        }else{
          res.send({
            'error':false,
            'message':'Successsfully Deleted suppliers category',
          });
        }  
      });
};

getTototalInventory = ()=>{
  var invQueryString = "SELECT * FROM posts";
      pool.query(invQueryString,function(err,response){
         if(err){
            return console.log(err);
         }else{
           return response;
         }
      });
};

exports.suppInventory = function(req,res,next){
    var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts.supplier,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts.supplier > '0'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching suppliers inventory data',
            'data':rows,
          });
    });
};

exports.singleSuppInv = function(req,res,next){
  var supplierId = req.body.supplierId;
  var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts.supplier,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts.supplier = '"+supplierId+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching single Supplier inventory data',
            'data':rows,
          });
    });   
};

exports.gigiSuppInv = function(req,res,next){
  var supplierId = '0';
  var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts.supplier,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts.supplier = '"+supplierId+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching Gigi Supplier inventory data',
            'data':rows,
          });
    }); 
};

exports.invByMakeSupp = function(req,res,next){
  var supplierId = '0';
  var make = req.body.make;
  var query = "SELECT posts.ID,posts.make,posts.post_name,posts.post_content,posts.supplier,posts_meta.regNo,posts_meta.post_id,posts_meta.price,posts_meta.status,posts_meta.fabricationYear,posts_meta.fuel,posts_meta.engine,posts_meta.transmission,posts_meta.doors,posts_meta.color,posts_meta.model,posts_meta.bodyType,posts_meta.mileage,posts_meta.imgUrl,posts_meta.series,posts_meta.carCondition,posts_meta.duty,posts_meta.interior,posts_meta.driverType FROM posts INNER JOIN posts_meta ON posts.ID = posts_meta.post_id WHERE posts.make = '"+make+"' AND posts.supplier > '"+supplierId+"'";
    pool.query(query,function(err,rows,fields){
          if(err){
              console.log(err);
           }
          res.send({
            'error':false,
            'message':'Fetching Suppliers inventory data by make',
            'data':rows,
          });
    });
};