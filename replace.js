module.exports=function (template,j){
    var fs = require("fs");

    // var card = fs.readFileSync("./template-card.html").toString();
    // var d = fs.readFileSync("./data.json").toString();
    

    var output = template.replace(/{%PRODUCTNAME%}/g, j.productName);
    output = output.replace(/{%IMAGE%}/g, j.image);
    output = output.replace(/{%FROM%}/g, j.from);
    output = output.replace(/{%NUTRIENTS%}/g, j.nutrients);
    output = output.replace(/{%QUANTITY%}/g, j.quantity);
    output = output.replace(/{%PRICE%}/g, j.price);
    output = output.replace(/{%ID%}/g, j.id);
    output = output.replace(/{%DESCRIPTION%}/g, j.description);
    if (j["organic"] == false)
        output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    return output;
    
}