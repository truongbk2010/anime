	
var app = require('express')(),
   port = process.env.PORT || 3000;

app.get('/',function(req,res){
    //res.sendFile(__dirname + "/demo.html");
    res.json({notes: "This is my notes 2!"})
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})