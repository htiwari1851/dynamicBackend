var fs=require("fs");
var reqcard=require("./card");
var count=0;
var arr={};
for(var i=0;i<5;i++){
    var data=reqcard(i);
    console.log(data);
    console.log(count++);
}