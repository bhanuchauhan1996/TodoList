var sql = require("mssql/msnodesqlv8");
var settings=require("../../setting");

exports.executesql = function(query,callback){

    sql.connect(settings.dbconfig,function(err){
        if(err)
        {
            console.log(err);
            callback(null,err);
            return;
        }
        const request= new sql.Request();
        request.query(query).then(function(recordset){
         callback(recordset);
        }).catch(function(err){
            console.log(err);
            callback(null,err);
        });
    }); 
};