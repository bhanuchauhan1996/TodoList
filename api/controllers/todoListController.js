var db=require("../model/db");
var util = require('util');
exports.getList=function(req,res){
db.executesql("select * from Todo",function(data,err){
    if(err)
    {
       
       res.writeHead(500,"Internal error",{"Content-Type":"application/json"});
       res.write(JSON.stringify({data:"Error occured:"+err}));
        
    }
    else{
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(data));
        
    }
    res.end();
})
};

exports.getsingle=function(req,res,todoid){
    
    db.executesql(`select * from Todo where Id=${todoid}`,function(data,err){
        if(err)
        {
           
           res.writeHead(500,"Internal error",{"Content-Type":"application/json"});
           res.write(JSON.stringify({data:"Error occured:"+err}));
            
        }
        else{
            res.writeHead(200,{"Content-Type":"application/json"});
            res.write(JSON.stringify(data));
            
        }
        res.end();
    })
};

exports.addtoList=function(req,res,reqbody){

    try {
        if(!reqbody) throw new Error("Input not valid");
        var title=reqbody.Title;
        var describe=reqbody.Description;
        var duedate=reqbody.DueDate;
        var priority=reqbody.Priority;
        var status=reqbody.Status;
    
          db.executesql(`Insert into Todo(Title,DueDate,Status,Priority,Description)values('${title}','${duedate}','${status}','${priority}','${describe}')`,function(data,err){
        if(err)
        {
           
           res.writeHead(500,"Internal error",{"Content-Type":"application/json"});
           res.write(JSON.stringify({data:"Error in insert occured:"+err}));
            
        }
        else{
            res.writeHead(200,{"Content-Type":"application/json"});
            
        }
        res.end();
    })
            
       

    } catch (err) {
        res.writeHead(500,"Internal error",{"Content-Type":"application/json"});
           res.write(JSON.stringify({data:"Error occured:"+err}));
    }

};

exports.update=function(req,res,reqbody,todoid){

    try {
        if(!reqbody) throw new Error("Input not valid");
       // var todoid=Number(reqbody.Id)
        var duedate=reqbody.DueDate;
        var priority=reqbody.Priority;
        var status=reqbody.Status;
        db.executesql(`Update Todo set DueDate='${duedate}',Priority='${priority}',Status='${status}' where Id=${todoid}`,function(data,err){
            if(err)
            {
               
               res.writeHead(500,"Internal error",{"Content-Type":"application/json"});
               res.write(JSON.stringify({data:"Error occured:"+err}));
                
            }
            else{
                res.writeHead(200,{"Content-Type":"application/json"});
                
            }
            res.end();
        });
        
    } catch (err) {
        res.writeHead(500,"Internal error",{"Content-Type":"application/json"});
           res.write(JSON.stringify({data:"Error occured:"+err}));
    }
};