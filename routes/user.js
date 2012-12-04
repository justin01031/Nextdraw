
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

 		var Title = [];
 		var Subtitle=[];
 		var Author=[];
 		var Publisher=[];
 		var Description=[];
 		var i=0;
 		// var Library=[];
 		
 		//console.log($body.find(".browseEntryData").text());
 		$(body).find(".briefcitTitleonly").each(function(){
 			Title[i]=$(this).text();
 		//	console.log($(this).text());
 			i++;
 		})
 		i=0;
 		$(body).find(".briefcitsubtitle").each(function(){
 			Subtitle[i]=$(this).text();
 		//	console.log($(this).text());
 			i++;
 		})
 		i=0;
 		$(body).find(".briefcitAuthoronly").each(function(){
 			Author[i]=$(this).text();
 		//	console.log($(this).text());
 			i++;
 		})
 		i=0;
 		$(body).find(".briefcitPublisher").each(function(){
 			Publisher[i]=$(this).text();
 		//	console.log($(this).text());
 			i++;
 		})
 		i=0;
 		

 		var result={
 			Title: Title ,
 			Subtitle: Subtitle,
 			Author:Author,
 			Publisher:Publisher,
 			Description:Description
 			// ISBN:ni;
 		};

 		//res.render('search', {keyword : req.query.keyword, data:$body.find(".briefcitTitleonly").text()});
 		res.render('search', {keyword : req.query.keyword, result:result});
 	});

	}