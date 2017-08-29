var mysql = require('mysql');
    bcrypt = require('bcrypt-nodejs');
    dateTime = require('node-datetime');
    jwt = require('jsonwebtoken');
    shortId = require('shortid');

    pool = mysql.createPool({
      host : 'localhost',
      user : 'root',
      password : 'gigierp',
     // password : 'skye2016',
      database : 'ninja',
    });


exports.getEnquiries = function(req,res){
	var  queryString = "SELECT enquiries.id,enquiries.title,enquiries.enquiry,enquiries.car_model,enquiries.amount,enquiries.status,enquiries.date,contacts.first_name,contacts.last_name,contacts.email,contacts.phone,salespersons.username,salespersons.phoneNo,salespersons.location FROM enquiries,contacts,salespersons WHERE  enquiries.customer_id = contacts.id AND  enquiries.user_id=salespersons.id ORDER BY id DESC";
	    pool.query(queryString,function(err,result){
	    	if(err){
	    		res.send({
	    			'error':true,
	    			'message':'Cannot find enquiries',
	    		});
	    		console.log(err);
	    	}

	    	res.send({
	    		'error':false,
	    		'message':'Returing all enquiries',
	    		'data':result,
	    	});
	    });
};

exports.getEnquiry = function(req,res){
  var enquiry = req.body.enquiryId;
      queryString = "SELECT enquiries.id,enquiries.title,enquiries.enquiry,enquiries.car_model,enquiries.amount,enquiries.status,enquiries.date,contacts.first_name,contacts.last_name,contacts.email,contacts.phone,salespersons.username,salespersons.phoneNo,salespersons.location FROM enquiries,contacts,salespersons WHERE  enquiries.customer_id = contacts.id AND  enquiries.user_id=salespersons.id AND enquiries.id='"+enquiry+"'";

      pool.query(queryString,function(err,result){
      	if(err){
      		res.send({
      			'error':true,
      			'message':'cannot find enquiry'+err,
      		});
      	}
      	res.send({
      		'error':false,
      		'message':'Enquiry',
      		'data':result,
      	});
      });
};

exports.addEnquiries = function(req,res){
    var title = req.body.title;
        enquiry = req.body.enquiry;
        model = req.body.model;
        amount = req.body.amount;
        date = dateTime.create().format('Y-m-d H:M:S');
        userId = req.body.userId;
        enquiryStatus = req.body.status;
        customerId = req.body.customerId;
        regNo = req.body.regNo;

  	
    var queryString = "INSERT INTO enquiries (user_id,customer_id,title,enquiry,car_model,regNo,amount,date,status) VALUES(?,?,?,?,?,?,?,?,?)"; 
        queryStringData = [userId,customerId,title,enquiry,model,regNo,amount,date,enquiryStatus];
             	         
             	        
        pool.query(queryString,queryStringData,function(err,response){
				        	if(err){
				        		console.log('error: '+err);
				        	}

				        	res.send({
				        		'error':false,
				        		'message':'Added enquiry',
				        	});
				        });  
           
        
 
};

exports.getUserEnquiries = function(req,res){
	var userId = req.body.userId;
	     queryString = "SELECT enquiries.id,enquiries.title,enquiries.enquiry,enquiries.car_model,enquiries.amount,enquiries.status,enquiries.date,contacts.first_name,contacts.last_name,contacts.email,contacts.phone,salespersons.username,salespersons.phoneNo,salespersons.location FROM enquiries,contacts,salespersons WHERE  enquiries.customer_id = contacts.id AND  enquiries.user_id=salespersons.id AND enquiries.user_id='"+userId+"'";
	    

	    pool.query(queryString,function(err,result){
	    	if(err){
	    		consoe.log(err);
	    		res.send({
	    			'error':true,
	    			'message':'Cannot find enquiries',
	    		});
	    	}

	    	res.send({
	    		'error':false,
	    		'message':'Returing enquiries',
	    		'data':result,
	    	});
	    });

}

exports.getCustomerEnquiries = function(req,res){
	var customerId = req.param('customerId');
	    //queryString = "SELECT * FROM enquiries WHERE customer_id='"+userId+"'";
	    queryString = "SELECT enquiries.title,enquiries.enquiry,enquiries.car_model,enquiries.amount,enquiries.date,customers.name,customers.email,customers.phoneNo,customers.idNo,customers.location FROM enquiries INNER JOIN customers ON enquiries.customer_id = customers.id WHERE customer_id='"+customerId+"'";

	    pool.query(queryString,function(err,result){
	    	if(err){
	    		consoe.log(err);
	    		res.send({
	    			'error':true,
	    			'message':'Cannot find enquiries',
	    		});
	    	}

	    	res.send({
	    		'error':false,
	    		'message':'Returing enquiries',
	    		'data':result,
	    	});
	    });	
};

exports.getClients = function(req,res){
  var queryString = "SELECT clients.id,clients.user_id,clients.account_id,clients.name,clients.work_phone,contacts.client_id,contacts.first_name,contacts.last_name,contacts.email,contacts.phone FROM clients INNER JOIN contacts ON clients.id = contacts.client_id";
  pool.query(queryString,function(err,result){
  	  res.send({
        'error':false,
        'message':'Returnning all clients',
  	  	'data':result,
  	  });
  });
};

exports.addClients = function(req,res){
	var user_id = '1';
	    account_id = '1';
	    currency_id = '8';
	    is_primary = '1';
	    send_invoice = '1';
        created_at = dateTime.create().format('Y-m-d H:M:S');
        updated_at = dateTime.create().format('Y-m-d H:M:S');
        
        first_name = req.body.first_name;
        last_name = req.body.last_name;
        email = req.body.email;
        phone = req.body.phone;
        work_phone = req.body.work_phone;
        name = req.body.org_name;
        contact_key = shortId.generate() +'_'+randomIntInc(100000,9999999999);


    var clientQueryData = [user_id,account_id,currency_id,created_at,updated_at,name,work_phone];
        clientQueryString = "INSERT INTO clients (user_id,account_id,currency_id,created_at,updated_at,name,work_phone) VALUES(?,?,?,?,?,?,?)";
        pool.query(clientQueryString,clientQueryData,function(err,response){
        	if(err){
        		return res.send({
        			"err":true,
        			'message':'er'+'-------------'+err
        		});
        	}else{
        		var client_id = response.insertId;
        		    contactsQueryData = [account_id,user_id,client_id,created_at,updated_at,is_primary,send_invoice,first_name,last_name,email,phone,contact_key];
        	        contactsQueryString = "INSERT INTO contacts(account_id,user_id,client_id,created_at,updated_at,is_primary,send_invoice,first_name,last_name,email,phone,contact_key) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        	
                    pool.query(contactsQueryString,contactsQueryData,function(err,response2){
                    	if(err){
                    		console.log(err);
                    		return res.send({
                    			'err':true,
                    			'message': 'error'+ err
                    		});
                    	}else{
                          //update the public id to result id
                            var updateClientQuery = "UPDATE clients SET public_id = '"+client_id+"' WHERE clients.id = '"+client_id+"'";
                            pool.query(updateClientQuery,function(err,result){
                            	if(err){
                            		console.log(err);
                            		return res.send({'err':true,'message':err});
                            	}else{
                            	res.send({
                          				'err':false,
                          				'message':'Client added successfully',
		
								               });
                            	}
                            });
                     	}
                    });
        	}
        });
};

exports.updateEnqStatus = function(req,res){
	var status = req.body.status;
	    enqId = req.body.enquiryId;

	    queryString = "UPDATE enquiries SET status = '"+status+"' WHERE enquiries.id = '"+enqId+"'";                              
        pool.query(queryString,function(err,result){
        	if(err){
        		return  res.send({'err':true,'message':err});
        	}else{
        		res.send({
        			'err':false,
        			'message':'Enquiry status updated',
        			'data':result,
        		});
        	}
        });                                  
};

exports.updateEnq = function(req,res){
  var status = req.body.status;
      info = status.split('_');
      enq_id = info[0];
      enq_status = info[1];

  var queryString = "UPDATE enquiries SET status='"+enq_status+"' WHERE id='"+enq_id+"'";

        pool.query(queryString,function(err,response){
          if(err){
            console.log(err);
                res.send({
                  'error':true,
                  'message':'Error occured'+err,
                });
          }
          res.send({
            'error':false,
            'message':'Enquiry Updates',
            'data':response,
          });
        });
};