exports.view = function(req, res){
	var data = require('../data.json');
	var oneData = data['Chores with Rinka'];
  	res.render('history', oneData);
};
