var mysql = require('mysql');
 


exports.connect = function(mode,done){
	pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'gigi'
	});

	done();
}



