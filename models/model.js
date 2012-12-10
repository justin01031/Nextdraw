var mongoose = require('mongoose');
var schema = new mongoose.Schema({title:{type:String,required:true},
                              	  picurl:{type:String,required:true}
                                 });
var piclist = module.exports =mongoose.model('pic',schema);