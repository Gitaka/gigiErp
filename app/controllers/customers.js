var mysql = require('mysql');
    bcrypt = require('bcrypt-nodejs');
    dateTime = require('node-datetime');
    jwt = require('jsonwebtoken');

    pool = mysql.createPool({
      host : 'localhost',
      user : 'root',
      //password : '',
      password : 'gigierp',
      database : 'ninja',
    });

  exports.getCustomers = function(req,res){
    var queryString = "SELECT * FROM customers";
        pool.query(queryString,function(err,result){
          if(err){
              res.send({
                 'error':true,
                 'message':'Cannot Get Customers' + err,
              });
          }
          res.send({
            'error':false,
            'message':'Returning all customers',
            'data':result,
          });
        });
  }
  exports.getCustomer = function(req,res){
    var customerId = req.param('id');
        queryString = "SELECT * FROM customers WHERE id = '"+customerId+"'";

        pool.query(queryString,function(err,result){
            if(err){
              console.log(err);
              res.send({
                'error':true,
                'message':'Cannot find user',
              });
            }

            res.send({
              'error':false,
              'message':'Returning user',
              'data':result,
            });
        });

  }
  exports.addCustomer = function(req,res){
  	 var name = req.body.name;
         email = req.body.email;
         phoneNo = req.body.phoneNo;
         idNo = req.body.idNo;
         location = req.body.location;

     var queryString = "INSERT INTO customers (name,email,phoneNo,idNo,location) VALUES ('"+name+"','"+email+"','"+phoneNo+"','"+idNo+"','"+location+"')";
         pool.query(queryString,function(err,response){
              if(err){
                console.log("error:"+' '+err);
                return;
              }
              res.send({
                'error':false,
                'message':'Added Customer',
              });
         });
  };  