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


  exports.getProjects = function(req,res,next){
     var userId = req.body.userId;
         queryString = "SELECT * FROM gigiprojects WHERE userId='"+userId+"' ORDER BY id DESC";
         pool.query(queryString,function(err,results){
        if(err){
          console.log(err);
        }
        res.send({
          'error':false,
          'message':'Returning all user projects',
          'data':results,
        });
      });

  };


  exports.createProject = function(req,res,next){
      var userId = req.body.userId;
          project = req.body.project;
          title = req.body.title;
          startDate = req.body.startDate;
          endDate = req.body.endDate;
          created_at = dateTime.create().format('Y-m-d H:M:S');

        queryData = [userId,title,project,startDate,endDate,created_at];
        queryString = "INSERT INTO gigiProjects (userId,title,project,startDate,endDate,created_at) VALUES (?,?,?,?,?,?)";
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
               'message':'Project Add Successfully',

        });
      });

  };  

  exports.getEvents = function(req,res,next){
     var userId = req.body.userId;
         queryString = "SELECT * FROM events WHERE userId='"+userId+"' ORDER BY id DESC";
         pool.query(queryString,function(err,results){
	    	if(err){
	    		console.log(err);
	    	}
	    	res.send({
	    		'error':false,
	    		'message':'Returning all user events',
	    		'data':results,
	    	});
	    });

  };


  exports.createEvent = function(req,res,next){
      var userId = req.body.userId;
          event = req.body.event;
          title = req.body.title;
          schedule = req.body.schedule;
          location = req.body.location;
          created_at = dateTime.create().format('Y-m-d H:M:S');

        queryData = [userId,title,event,schedule,location,created_at];
        queryString = "INSERT INTO events (userId,title,event,schedule,location,created_at) VALUES (?,?,?,?,?,?)";
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
               'message':'Event Add Successfully',

	    	});
	    });



  };  



  exports.getTasks = function(req,res,next){
     var userId = req.body.userId;
         queryString = "SELECT * FROM user_tasks WHERE userId='"+userId+"' ORDER BY id DESC";
         pool.query(queryString,function(err,results){
	    	if(err){
	    		console.log(err);
	    	}
	    	res.send({
	    		'error':false,
	    		'message':'Returning all user tasks',
	    		'data':results,
	    	});
	    });

  };


  exports.createTask = function(req,res,next){
      var userId = req.body.userId;
          task = req.body.task;
          title = req.body.title;
          dueDate = req.body.dueDate;
          created_at = dateTime.create().format('Y-m-d H:M:S');


        queryData = [userId,title,task,dueDate,created_at];
        queryString = "INSERT INTO user_tasks (userId,title,task,dueDate,created_at) VALUES (?,?,?,?,?)";
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
               'message':'Task Add Successfully',

	    	});
	    });
  };  


    exports.getMilestones = function(req,res,next){
     var userId = req.body.userId;
         queryString = "SELECT * FROM milestones WHERE userId='"+userId+"' ORDER BY id DESC";
         pool.query(queryString,function(err,results){
	    	if(err){
	    		console.log(err);
	    	}
	    	res.send({
	    		'error':false,
	    		'message':'Returning all user milestones',
	    		'data':results,
	    	});
	    });

  };


  exports.createMilestone = function(req,res,next){
      var userId = req.body.userId;
          milestone = req.body.milestone;
          title = req.body.title;
          created_at = dateTime.create().format('Y-m-d H:M:S');


        queryData = [userId,title,milestone,created_at];
        queryString = "INSERT INTO milestones (userId,title,milestone,created_at) VALUES (?,?,?,?)";
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
               'message':'Milestone  Add Successfully',

	    	});
	    });
  };  