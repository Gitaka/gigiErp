var mysql = require('mysql');
    bcrypt = require('bcrypt-nodejs');
    dateTime = require('node-datetime');
    jwt = require('jsonwebtoken');

    pool = mysql.createPool({
      host : 'localhost',
      user : 'root',
      password : 'skye2016',
      database : 'ninja',
      
    });


exports.inventoryCount = function(req,res,next){
    var queryString = "SELECT * FROM posts";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Inventory Count',
        			'data':result.length,
        		});
        	}	

        });
};

exports.s_inventoryCount = function(req,res,next){
	var queryString = "SELECT * FROM affiliate_posts";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Suppliers inventory Count',
        			'data':result.length,
        		});
        	}	

        });	    
}

exports.suppliersCount = function(req,res,next){
	var queryString = "SELECT * FROM affiliates_supp";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Suppliers Count',
        			'data':result.length,
        		});
        	}	

        });	   
}
exports.importersCount = function(req,res,next){
	var queryString = "SELECT * FROM importer_details";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Importers Count',
        			'data':result.length,
        		});
        	}	

        });	   
}

exports.importsCount = function(req,res,next){
	var queryString = "SELECT * FROM imports";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Imports Count',
        			'data':result.length,
        		});
        	}	

        });	 
}
exports.enquiriesCount = function(req,res,next){
	var queryString = "SELECT * FROM enquiries";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Enquiries Count',
        			'data':result.length,
        		});
        	}	

        });	

}

exports.enquiriesHotCount = function(req,res,next){
	var queryString = "SELECT * FROM enquiries WHERE status ='hot' ";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Enquiries with Hot status Count',
        			'data':result.length,
        		});
        	}	

        });	

}
exports.enquiriesColdCount = function(req,res,next){
	var queryString = "SELECT * FROM enquiries WHERE status = 'cold' ";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Enquiries with cold status Count',
        			'data':result.length,
        		});
        	}	

        });	

}
exports.enquiriesMediumCount = function(req,res,next){
	var queryString = "SELECT * FROM enquiries WHERE status = 'medium' ";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'Enquiries with medium status Count',
        			'data':result.length,
        		});
        	}	

        });	

}

exports.clientsCount = function(req,res,next){
	var queryString = "SELECT * FROM clients";
        pool.query(queryString,function(err,result){
        	if(err){
        		res.send({
        			'error':true,
        			'message':err
        		}); 
        	}else{
        		res.send({
        			'error':false,
        			'message':'clients Count',
        			'data':result.length,
        		});
        	}	

        });	

}