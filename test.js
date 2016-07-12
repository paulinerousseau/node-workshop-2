var x = require("./request-as-json.js");

x('http://www.google.com', function(err, res){
    console.log(err);
})