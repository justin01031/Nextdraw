var mongoose = require('mongoose');
var eachpic = new mongoose.Schema({picdescription:{type:String},
                              	   picurl:{type:String,required:true}
                                 });
var schema = new mongoose.Schema({topic:{type:String}
								  ,category:{type:String}
								  ,description:{type:String}
								  ,content:[eachpic]});
var piclist = module.exports =mongoose.model('pic',schema);
for (var i = 0 ; i < 3 ;i++)
{
var pic_default = new piclist({topic:"today" + i,
							  content:[{picdescription:"test" + i,
							  	picurl:"test" + i + ".jpg"
							   }]
							  });
pic_default.save(function(err)
      	{
        if (err) throw err
      	});	
}
