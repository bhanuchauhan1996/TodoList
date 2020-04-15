var express=require('express');
var app=express();
var todo=require("../Node_Final_Assignment//api//controllers//todoListController");
var bodyparser=require('body-parser')
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));

app.get('/todo',function(req,res){
    todo.getList(req,res);
});

app.get('/todo/:id',function(req,res){
    var todoid=Number(req.params.id);
    todo.getsingle(req,res,todoid);
});

app.post('/todo',function(req,res){
    var reqbody=req.body;
    
    todo.addtoList(req,res,reqbody);
    

});

app.patch('/todo/:id',function(req,res){
    var reqbody=req.body;
    var todoid=Number(req.params.id);
    todo.update(req,res,reqbody,todoid);
});

app.listen(3000,()=>{
    console.log('running');
    
 });