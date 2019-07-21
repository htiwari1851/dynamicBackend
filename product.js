var fs = require("fs");

const template_product=fs.readFileSync("./template-product.html").toString();
var k=fs.readFileSync("./data.json").toString();
var a=JSON.parse(k);
var j=a[0];
var output=template_product.replace(/{%PRODUCTNAME%}/g,j.productName);
output=output.replace(/{%IMAGE%}/g, j.image);
output =output.replace(/{%FROM%}/g, j.from);
output =output.replace(/{%NUTRIENTS%}/g, j.nutrients );
output =output.replace(/{%QUANTITY%}/g, j.quantity );
output =output.replace(/{%PRICE%}/g, j.price);
output =output.replace(/{%DESCRIPTION%}/g, j.description);
if(j["organic"]==false)
output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

console.log(output);