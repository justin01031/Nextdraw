
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
// exports.search = function(req, res){
// 	res.send("hello");
// }
exports.search=function(req,res,next){
	console.log(req.query.keyword);
	if(!req.query.keyword) throw new Error('no keyword');
	//res.send(req.query.keyword);
	res.render('search', {});
	}