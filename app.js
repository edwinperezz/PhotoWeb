var express = require("express"),
	app 	= express();

app.get("/", (req,res) => {
	res.send("Hello");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Website is up!");
});