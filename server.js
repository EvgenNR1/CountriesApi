const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mainRoute = require('./routes/main');
const countryRoute = require('./routes/country');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(mainRoute.router);
app.use(countryRoute);


app.use(function(req,res,next){
    res.status(404).render('404',{
        pageTitle: "Oops. Page not found",
        pageNotFound: "Oops. Page not found. Try something else",
        myVariable: "Hello World",
        path:""
    });
})


app.listen(process.env.PORT || 8080, function(){
    console.log("Server has started.");
});
