
/*
 * GET users listing.
 */
var request = require('request'),
$ = require('jQuery');
exports.list = function(req, res){
  res.send("respond with a resource");
};
// exports.search = function(req, res){
// 	res.send("hello");
// }
exports.search=function(req,res,next){
	//console.log(req.query.keyword);
	if(!req.query.keyword) throw new Error('no keyword');
	//res.send(req.query.keyword);
	var url="http://tulips.ntu.edu.tw/search*cht/X?SEARCH="+req.query.keyword+"&searchscope=5";
	//console.log(url);
	
 	request(url, function (error, response, body) {
 		var $body=$(body);
 		
 		//console.log($body.find(".browseEntryData").text());
 		res.render('search', {keyword : req.query.keyword, data:$body.find(".briefcitTitleonly").text()});
 	});
	
	}