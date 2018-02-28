

exports.view = function(req, res){
	var data = require('../data.json');
	var oneData = data['Food with Matt'];
  	res.render('moodLog', oneData);
};


