var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router) {
	router.route('/students')
	  .get(student.find)
	  .post(student.insert);
	
	router.route('/students/:id')//expecting parameter to store in id
		.get(student.findOne)
	 	.put(student.update)
	 	.delete(student.remove);
	 	
	router.route('/teacher')
	  .get(teacher.find)
	  .post(teacher.create)
	  .put(teacher.update)
	  .delete(teacher.delete);
return router;
};