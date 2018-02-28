/*
 * GET home page.
 */

exports.view = function(req, res){
  var data = require('../data.json');
 // console.log(Object.keys(data));
  //var oneData = data['Food with Matt'];
  res.render('newHome', {objects: data});
};
