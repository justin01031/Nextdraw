
/*
 * GET users listing.
 */
 var database = {};
 var prefix ="C:\\Users\\asus\\Nextdraw\\public\\upload"
 	,mongoose = require('mongoose');
	//,$=require('jquery');

  var piclist = require('../models/model');
 mongoose.connect('localhost','test');//ned link to mongodb
  // mongoose.connect('mongodb://justin01031:justin01031@ds045897.mongolab.com:45897/nextdraw')

var request = require('request'),
$ = require('jQuery');

// var title;

piclist.find().exec(function(err,docs){console.log(docs)});	
exports.index_topic = function(req, res){
  piclist.find().exec(function(err,docs){
  	if (err) throw err 
  	console.log(docs);
  	res.render('index',{topics:docs});
  });
  
};
exports.list = function(req, res){
  res.send("respond with a resource");
};
// exports.search = function(req, res){
// 	res.send("hello");
// }
piclist.remove(function(err){if (err) throw err})

// exports.topic_chosen=function(req, res, next){
// 	console.log(req.body);
// 	title=req.body.title;
// }	
exports.topic=function(req, res, next) {
	console.log(req.params['id']);
	console.log('hihi');
	var temp;
	piclist.findOne({topic:req.params['id']}).exec(function(err,docs){
    if(err){
      next(err);
      return;
    }
   	
    res.render('topic',{piclist:docs.content, topic:req.params['id']})
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
// <<<<<<< HEAD
// 		var pic_new = new piclist(
//                                  {title:"test1" ,
// =======
		var pic_new = new Object({picdescription:req.body.picdescription ,
                                  picurl:req.files.file.path.replace(prefix,'')
                                  });
                                  
		console.log(pic_new);
		piclist.findOne({topic:req.params['id']}).exec(function(err,docs){
    	if(err){
      	next(err);
      	return;
    	}
    	var temp_array=new Array();
    	for(var i=0; i < docs.content.length; i++)
    	{
    		var pic_old = new Object({picdescription:docs.content[i].picdescription, picurl:docs.content[i].picurl});
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
      		

		res.redirect('/topic/' + req.params['id'] );
}
exports.search=function(req,res,next){
	 	console.log(req.query.keyword)
	 	var result=new Array();
	 	piclist.find().exec(function(err,docs){
	 		for (var i = 0; i < docs.length ; i++)
	 		{
	 		 if (docs[i].topic.match(req.query.keyword))
	 		 	result.push(docs[i]);
	 		}
	 	console.log(result.length); 
 		res.render('search', {keyword:req.query.keyword , result:result});

	 	})


	}
	exports.newtopic=function(req,res,next){
		res.render('newtopic',{});

	}
	exports.addtopic=function(req,res,next){
		console.log(req.body.topic);
		console.log(req.body.category);
		console.log(req.body.description);
		if(req.files.file.name=='') throw new Error('no pitcure');
		database[req.files.file.path.replace(prefix,'')] = {
	 			title : req.body.picdescription
	 	};

	 	console.log(database);
		var topic_new = new piclist({topic:req.body.topic
									 ,category:req.body.category
                                     ,description:req.body.description
							  	     ,content:[{picdescription:"head",
							  	    	picurl:req.files.file.path.replace(prefix,'')
							          }]
							         });

		topic_new.save(function(err){
			if (err) throw err
		});
		console.log(topic_new);
      		
		res.redirect('/topic/'+ req.body.topic);
	}