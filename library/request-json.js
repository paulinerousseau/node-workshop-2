var request = require('request');

var url = 'http://api.open-notify.org/iss-now.json';

function requestJson (url, callback){
    request(url, function(err, response){
       if (err){
           callback(err);
       }else{
           
       try{
           var result =JSON.parse(response.body);
           callback(null,result);
       }
       catch(err){
           callback(err);
       }
       }
        
    })
}
requestJson (url,function(err,response){
    if (err){
       console.log ("there was an error");
    }else{
      console.log("everything is working fine");
    }
});
    
module.exports = {
        requestJson : requestJson
        
    };

    
    
    
    
    
    
    
