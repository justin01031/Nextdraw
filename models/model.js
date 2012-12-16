var mongoose = require('mongoose');
var eachpic = new mongoose.Schema({picdescription:{type:String},
                              	   picurl:{type:String,required:true}
                                 });
var schema = new mongoose.Schema({topic:{type:String}
								  ,category:{type:String}
								  ,description:{type:String}
								  ,content:[eachpic]});
var piclist = module.exports =mongoose.model('pic',schema);
var pic_default = new piclist({topic:"today",
							  content:[{picdescription:"test",
							  	picurl:"test.jpg"
							   }]
							  });
pic_default.save(function(err)
      	{
        if (err) throw err
      	});	
