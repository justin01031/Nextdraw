var mongoose = require('mongoose');
var eachpic = new mongoose.Schema({title:{type:String,required:true},
                              	  picurl:{type:String,required:true}
                                 });
var schema = new mongoose.Schema({topic:{type:String,required:true}
								  ,content:[eachpic]});
var piclist = module.exports =mongoose.model('pic',schema);
var pic_default = new piclist({topic:"today",
							  content:[{title:"test",
							  	picurl:"test"
							   }]
							  });
pic_default.save(function(err)
      	{
        if (err) throw err
      	});	
