var express=require('express');
var path=require('path');
var User = require('body-parser');
var t=require('./Watches.js');
var app=express()

app.disable('etag');

//app.use('/routing',express.static(path.join(__dirname,'routing')))
app.use(express.static(__dirname));
console.log(__dirname)

app.use(User.urlencoded({ extended: false}));
app.use(User.json());

/*app.use('/',function(req,res){
res.sendFile(__dirname + "/angform.html");
})
app.get('/',function(req,res)
{
    res.send('');
});*/
app.get('/list', function (req, res) {
	t.find({},function(err,data){
		res.json(data);
		})
})
 /* user.save(function(err,data){
	  res.json(data);
	  
})
});*/
console.log("hi how are you");
app.listen(8080)