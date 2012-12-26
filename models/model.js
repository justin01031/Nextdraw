var mongoose = require('mongoose');
var eachpic = new mongoose.Schema({picdescription:{type:String},
                              	   picurl:{type:String,required:true}
                                 });
var schema = new mongoose.Schema({topic:{type:String}
								  ,category:{type:String}
								  ,description:{type:String}
								  ,content:[eachpic]});
var piclist = module.exports =mongoose.model('pic',schema);
// for (var i = 0 ; i < 3 ;i++)
// {
// var pic_default = new piclist({topic:"today" + i,
// 								description:"hello",
// 							  content:[{picdescription:"test" + i,
// 							  	picurl:"test" + i + ".jpg"
// 							   }]
// 							  });
// pic_default.save(function(err)
//       	{
//         if (err) throw err
//       	});	
// }
// var pic_default = new piclist({topic:"多刀流",
// 								description:"人類到底可以拿幾刀流呢讓我們來驗證看看",
// 							    content:[{picdescription:"首先就從兩支開始吧",
// 							  	picurl:"test0.png"
// 							   }]
// 							  });
// pic_default.save(function(err)
//       	{
//         if (err) throw err
//       	});	
// var pic_default = new piclist({topic:"過橋",
// 								description:"運用鄉民之力救救這孩子吧",
// 							    content:[{picdescription:"她想過去對岸呢",
// 							  	picurl:"test1.jpg"
// 							   }]
// 							  });
// pic_default.save(function(err)
//       	{
//         if (err) throw err
//       	});
// var pic_default = new piclist({topic:"鐵球",
// 								description:"拜託你們幫幫忙吧",
// 							    content:[{picdescription:"不知道該怎麼辦啊...",
// 							  	picurl:"test2.jpg"
// 							   }]
// 							  });
pic_default.save(function(err)
      	{
        if (err) throw err
      	});		