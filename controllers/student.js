var db = require(__dirname + '/../lib/mysql');

exports.find=function(req,res,next){
	console.log(req.ip+" find()");
	db.query('SELECT * FROM student',
	function(err,rows){
		if(err) return next(err);
		res.send(rows);	
	});
}


exports.findOne = function(req,res,next){
console.log(req.ip+" findOne()");
	db.query('SELECT * FROM student where studNo=?',[req.params.id],
	function(err,rows){
		if(err) return next(err);
		if(rows.length==0)
			res.status(404).send('Student not Found!');
		else res.send(rows);
	});
}

exports.insert = function(req,res,next){
  console.log(req.ip+" Insert()");
	db.query('INSERT INTO student VALUES(?,?,?)',[req.body.studNo, req.body.name, req.body.bdate],
	function(err,rows){
		if(err) return next(err);
		else res.send(rows);
	});
}

exports.update = function(req,res,next){
  console.log(req.ip+" Update()");
	db.query('UPDATE student SET ? WHERE studNo=?',[req.body, req.params.id],
	function(err,rows){
		if(err) return next(err);
		if(rows.length==0)res.status(404).send('Student not Found!');
		res.send(rows);
	});
}

exports.remove = function(req,res,next){
  console.log(req.ip+" Delete()");
	db.query('DELETE FROM student WHERE studNo=?',[req.params.id],
	function(err,rows){
		if(err) return next(err);
		res.send(rows);
	});
}