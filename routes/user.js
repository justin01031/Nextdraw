
/*
 * GET users listing.
 */
 var database = {};
 var prefix ="C:\\Users\\George\\Desktop\\Nextdraw\\public\\upload\\"
	,mongoose = require('mongoose');
	//,$=require('jquery');

  var piclist = require('../models/model');
  mongoose.connect('localhost','test');//ned link to mongodb

var request = require('request'),
$ = require('jQuery');


piclist.find().exec(function(err,docs){console.log(docs)});	
exports.list = function(req, res){
  res.send("respond with a resource");
};
// exports.search = function(req, res){
// 	res.send("hello");
// }
piclist.remove(function(err){if (err) throw err})

	
exports.topic=function(req, res, next) {
	var temp;
	piclist.findOne({topic:"today"}).exec(function(err,docs){
    if(err){
      next(err);
      return;
    }
   	
    res.render('topic',{piclist:docs.content})
     // console.log(docs);
	});

	
 
  }
exports.upload=function(req, res, next) {
	// console.log(req.files.file.name);
	 	if(req.files.file.name=='') throw new Error('no pitcure');
		database[req.files.file.path.replace(prefix,'')] = {
	 			title : req.body.title
	 	};

	 	console.log(database);
		var pic_new = new Object({title:"testasdasd" ,
                                  picurl:req.files.file.path.replace(prefix,'')
                                  });
                                  
		console.log(pic_new);
		piclist.findOne({topic:"today"}).exec(function(err,docs){
    	if(err){
      	next(err);
      	return;
    	}
    	var temp_array=new Array();
    	for(var i=0; i < docs.content.length; i++)
    	{
    		var pic_old = new Object({title:docs.content[i].title, picurl:docs.content[i].picurl});
    		console.log(pic_old);
    		temp_array.push(pic_old);
    		//console.log(docs.content[i]);

    	}
      	temp_array.push(pic_new);
		docs.content = temp_array;
		docs.save(function(err)
      	{
        if (err) throw err
      	});	    	
		console.log(docs);
		});
      		
	 	
		res.redirect('/topic');
}
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
	