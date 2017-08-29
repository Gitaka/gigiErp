var mysql = require('mysql');
    bcrypt = require('bcrypt-nodejs');
    dateTime = require('node-datetime');
    jwt = require('jsonwebtoken');
    multer = require('multer');

    pool = mysql.createPool({
      host : 'localhost',
      user : 'root',
      //password : '',
      password : 'gigierp',
      database : 'ninja',
      
    });

var baseDir = __dirname.substring(0,__dirname.length - 11)+'public'+"/"+'salespersons'; 

exports.getUsers = function(req,res){
  var queryString = "SELECT * FROM salespersons ORDER BY id DESC";
    
      pool.query(queryString,function(err,result){
        if(err){
          console.log(err);
          res.send({
            'error':true,
            'data':err,
          });

        }
        res.send({
            'error':false,
            'message':'returning all sales persons',
            'data':result,
          });
      });
}

exports.getUser = function(req,res){
 // var userId = req.param('userId');
  var userId = req.body.userId;
  var queryString = "SELECT * FROM salespersons WHERE id='"+userId+"'";
    
      pool.query(queryString,function(err,result){
        if(err){
          console.log(err);
          res.send({
            'error':true,
            'data':err,
          });

        }
        res.send({
            'error':false,
            'message':'returning sales persons',
            'data':result,
          });
      });
}

exports.registerUser = function(req,res){


    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,baseDir)
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-'+Date.now()+'-'+ file.originalname)
      }
    });

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

//insert data into db
  var username = req.body.name;
      password = req.body.password;
      email = req.body.email;
      location = req.body.location;
      phoneNo = req.body.phoneNo;
      idNo = req.body.idNo;
      user_role = req.body.role;
      employeeId = req.body.empId;
      manager = req.body.manager;
      dob = req.body.dob;
      hireDate = req.body.hireDate;

  var salt = bcrypt.genSaltSync(10);
      hash = bcrypt.hashSync(password,salt);

  var data = {
      'name':username,
      'password':hash,
      'email':email,
      'user_role':user_role,
  };
  
  var token = jwt.sign(data,process.env.JWT_SECRET);
      queryStringData = [username,idNo,employeeId,manager,dob,hireDate,email,phoneNo,location,hash,user_role,token,imgUrl];
      queryString = "INSERT INTO salespersons(username,idno,employeeId,manager,dob,hireDate,email,phoneNo,location,password,user_role,token,photo) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";

     pool.query(queryString,queryStringData,function(err,result){
        if(err)
          console.log(err);


        res.redirect('/#/salespeople_view');
        

  });



        });
     

}

exports.signIn = function(req,res){
  var email = req.body.email;
      password =req.body.password;

  var upload = multer().array();
    
  var queryString = "SELECT * FROM salespersons WHERE email='"+email+"'"; 


      pool.query(queryString,function(err,rows){
          if(err){
             console.log(err);
          }
          
          if(rows.length > 0){
              var pass;
                for(var i in rows){
                  hashPass = rows[i].password;
                }
              
              bcrypt.compare(password,hashPass,function(err,result){
                if(result){
                  res.send({
                    'error':false,
                    'message':'signIn successfull',
                    'data':rows[i],
                  });
                }else{
                  res.send({
                    'error':true,
                    'message':'Incorrect password',
                  });
                }
              });
              
          }else{
                  res.send({
                    'error':true,
                    'message':'User not found',
                  });            
          }
      });  
}
exports.adminSignin = function(req,res){
  var email = req.body.email;
      password =req.body.password;

  var upload = multer().array();
    
  var queryString = "SELECT * FROM adminuser WHERE email='"+email+"'"; 


      pool.query(queryString,function(err,rows){
          if(err){
             console.log(err);
          }
          
          if(rows.length > 0){
              var pass;
                for(var i in rows){
                  hashPass = rows[i].password;
                }
              
              bcrypt.compare(password,hashPass,function(err,result){
                if(result){
                  res.send({
                    'error':false,
                    'message':'signIn successfull',
                    'data':rows[i],
                  });
                }else{
                  res.send({
                    'error':true,
                    'message':'Incorrect password',
                  });
                }
              });
              
          }else{
                  res.send({
                    'error':true,
                    'message':'admin User not found',
                  });            
          }
      });  
}

exports.regAdmin = function(req,res){
 

      var username = req.body.name;
          password = req.body.password;
          email = req.body.email;
          created_at =dateTime.create().format('Y-m-d H:M:S');
        

  var salt = bcrypt.genSaltSync(10);
      hash = bcrypt.hashSync(password,salt);


      queryStringData = [username,hash,email,created_at];
      queryString = "INSERT INTO adminUser(name,password,email,created_at) VALUES(?,?,?,?)";
      pool.query(queryString,queryStringData,function(err,result){
        if(err)
          console.log(err);

        res.send({
          'error':false,
          'message':'admin registered',
        });
        

  });
}