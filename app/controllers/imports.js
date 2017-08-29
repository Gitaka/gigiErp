var mysql = require('mysql');
   dateTime = require('node-datetime');
   shortId = require('shortid');
   nodemailer = require('nodemailer');

    pool = mysql.createPool({
    	host : 'localhost',
    	user : 'root',
        password : 'gigierp',
    	//password : '',
    	database : 'ninja',
    });
  
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth:{
      user: "",
      pass: "",
    }
  });


exports.getImporters = function(req,res){
	var queryString = 'SELECT * FROM importer_details ORDER BY id DESC';
	    pool.query(queryString,function(err,results){
	    	if(err){
	    		console.log(err);
	    	}
	    	res.send({
	    		'error':false,
	    		'message':'Returning all importers details',
	    		'data':results,
	    	});
	    });
};

exports.addImporter = function(req,res){
	var name = req.body.name;
	    idNo = req.body.idNo;
	    phoneNo = req.body.phoneNo;
	    email = req.body.email;
	    location = req.body.location;
	    uid = shortId.generate() +'_'+randomIntInc(100000,9999999999);

    var queryData = [name,idNo,uid,phoneNo,email,location];
	var queryString = "INSERT INTO importer_details (name,idNo,uid,phoneNo,email,location) VALUES (?,?,?,?,?,?)";

	    pool.query(queryString,queryData,function(err,response){
	    	if(err){
	    		console.log(err);
	    		res.send({
	    			'error':true,
	    			'message':'error occured'+err,
	    		});
	    	}
	    	res.send({
               'error':false,
               'message':'Importer Add Successfully',

	    	});
	    });
}

exports.getAllImports = function(req,res){
	var queryString = 'SELECT imports.id,imports.importer_uid,imports.import_name,imports.make,imports.model,imports.budget,imports.year,imports.fuel,imports.engine,imports.transmission,imports.color,imports.comments,imports.date,imports_meta.imports_id,imports_meta.e_arrival_date,imports_meta.shipping,imports_meta.deposit,imports_meta.total_amount,imports_meta.balance,imports_meta.status,importer_details.name,importer_details.idNo,importer_details.email,importer_details.phoneNo,importer_details.location FROM imports,imports_meta,importer_details WHERE imports.id = imports_meta.imports_id AND imports.importer_uid=importer_details.uid ORDER BY id DESC';

        pool.query(queryString,function(err,results){
        	if(err){
        		console.log(err);
        		res.send({
        			'error':true,
        			'message':'error occured'+err,
        		});

        	}
        	res.send({
                'error':false,
                'message':'Returning all imports',
                'data':results,
        	});
        });
}
exports.addImport=function(req,res){
	var importer_uid = req.body.uid;
	    name = req.body.name;
        date = dateTime.create().format('Y-m-d H:M:S');
        budget = req.body.budget;
        year = req.body.year;
        fuel = req.body.fuel;
        engine = req.body.engine;
        transmission = req.body.transmission;
        color = req.body.color;
        model = req.body.model;
        make = req.body.make;
        comments = req.body.comments;


    var queryData = [importer_uid,name,make,model,budget,year,transmission,color,engine,fuel,comments,date];
    var queryString = 'INSERT INTO imports(importer_uid,import_name,make,model,budget,year,transmission,color,engine,fuel,comments,date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';

        pool.query(queryString,queryData,function(err,results){
        	if(err){
        		console.log(err);
        		res.send({
        			'error':true,
        			'message':'error occured'+err,
        		});
        	}

            var metaQueryData = [results.insertId,'Enquiry'];
            var metaQuery = 'INSERT INTO imports_meta(imports_id,status) VALUES(?,?)';

                pool.query(metaQuery,metaQueryData,function(err,response){
                	if(err){
                		console.log(err);
                		res.send({
                			'error':true,
                			'message':'Error occured'+err,
                		});
                	}


                   //send email to client to notify that enquiry has been added

                	res.send({
                		'error':false,
                		'message':'Import enquiry added',
                	});
                });

        });

 };

exports.updateImport = function(req,res){
	var imports_id = req.body.imports_id;
	    deposit = req.body.deposit;
	    arrival_date = req.body.arrival_date;
	    shipping = req.body.shipping;
	    total_amount = req.body.amount;
	    status = 'Commited';
	    balance = total_amount - deposit;

	var queryString = "UPDATE imports_meta SET e_arrival_date ='"+arrival_date+"',shipping='"+shipping+"',deposit='"+deposit+"',total_amount='"+total_amount+"',balance='"+balance+"',status='"+status+"' WHERE imports_id='"+imports_id+"'";

        pool.query(queryString,function(err,response){
        	if(err){
        		console.log(err);
                res.send({
                	'error':true,
                	'message':'Error occured'+err,
                	'q':queryString
                });
        	}

  //send email to client to notify the client the shipping details
        	res.send({
        		'error':false,
        		'message':'Import updated',
        	});
        });
};
exports.getImportsByStatus = function(req,res){
	var status = req.param('status');
	var queryString = "SELECT imports.id,imports.importer_uid,imports.import_name,imports.make,imports.model,imports.budget,imports.year,imports.fuel,imports.engine,imports.transmission,imports.color,imports.comments,imports.date,imports_meta.imports_id,imports_meta.e_arrival_date,imports_meta.shipping,imports_meta.deposit,imports_meta.total_amount,imports_meta.balance,imports_meta.status,importer_details.name,importer_details.idNo,importer_details.email,importer_details.phoneNo,importer_details.location FROM imports,imports_meta,importer_details WHERE imports.id = imports_meta.imports_id AND imports.importer_uid=importer_details.uid AND imports_meta.status='"+status+"'";

        pool.query(queryString,function(err,results){
        	if(err){
        		console.log(err);
        		res.send({
        			'error':true,
        			'message':'error occured'+err,
        		});

        	}
        	res.send({
                'error':false,
                'message':'Returning all imports',
                'data':results,
        	});
        });
 };

exports.clearImport = function(req,res){
	var imports_id = req.body.import_id;
	    amount = req.body.amount;
	    status = 'Cleared';
	    balance='0';

	    var queryString = "UPDATE imports_meta SET deposit='"+amount+"',total_amount='"+amount+"',balance='"+balance+"',status='"+status+"' WHERE imports_id='"+imports_id+"'";

        pool.query(queryString,function(err,response){
        	if(err){
        		console.log(err);
                res.send({
                	'error':true,
                	'message':'Error occured'+err,

                });
        	}

  //send email to client to notify the client the shipping details
        	res.send({
        		'error':false,
        		'message':'Import Cleared',

        	});
        });
};


randomIntInc = (low,high)=>{
     return Math.floor(Math.random() * (high - low + 1) + low);
};

exports.importStatusUpdate = function(req,res){
    var importId = req.body.importId;
        status = req.body.status;
        details = req.body.details;



        queryString = "UPDATE imports_meta SET "+status+" = '"+details+"' WHERE imports_id = '"+importId+"'";
          
        pool.query(queryString,function(err,result){
            if(err){
                return res.send({'err':true,'data':err});
                 console.log(err);
            }else{
        
                selectQueryString = "SELECT * FROM imports WHERE id = '"+importId+"'";
                  
                pool.query(selectQueryString,function(err,selectResult){
                    if(err){
                        return console.log(err);
                    }else{
                       var uid=null;
                           import_name = null;
                     for(var i in selectResult){
                        uid = selectResult[i].importer_uid;
                        import_name = selectResult[i].import_name;
                        res.send({
                            'message':'Updated Import sending email',
                        });
                     }
                    
                    selectImporter(uid,status,details,import_name);
                   
                    }
                });
      
        
            }
        });

 
};

selectImporter = (uid,status,details,title)=>{
        queryString = "SELECT * FROM importer_details WHERE uid = '"+uid+"'";
                  
        pool.query(queryString,function(err,result){
             if(err){
                        return console.log(err);
                    }else{
                    var email = null;
                        name = null;
                     for(var i in result){
                        email = result[i].email;
                        name = result[i].name;
                        console.log({'error':false,'message':'sending email to impoerter'});
                     }
                    
                      sendEmailToImpoter(email,name,status,details,title);
                    }
                });
 
};

sendEmailToImpoter = (email,name,status,details,title)=>{
    console.log(email + status + details + title);
    /*var mailOptions={
        to : email,
        subject : status,
        html : "<h1>Hello, '"+name+"'</h1></br><h1>'"+title+"'</h1><p>'"+details+"'</p>",
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log("email not sent"+error);
        
     }else{
            console.log("Message sent: ");
        
         }   
     });   */
};