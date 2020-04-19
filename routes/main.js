const express = require('express');
const path = require('path');
const rootDirectory = require('../utils/path');
const axios = require('axios');
const router = express.Router();
let countryData=[];

router.get('/',function(req, res){
    res.render('main',{
        pageTitle: 'Country',
        path:'/'
    });
});

router.post('/',function(req,res){
    let country = req.body.country;
    let url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
   
    axios.get(url).then((response) => {
        countryData.length=0;
        let name = response.data[0].name;
        let domain = response.data[0].topLevelDomain[0];
        let calCode = response.data[0].callingCodes[0];
        let capital = response.data[0].capital;
        let region = response.data[0].region;
        let subregion = response.data[0].subregion;
        let population = response.data[0].population;
        let timezone = response.data[0].timezones[0];
        let langInEnglish = response.data[0].languages[0].name;
        let currency = response.data[0].currencies;//code; name; symbol
        let imageUrl = response.data[0].flag;
        countryData.push({name:name, domain:domain, calCode:calCode, capital:capital, region:region, subregion:subregion,
            population:population, timezone:timezone, langInEnglish:langInEnglish, currency:currency, imageUrl:imageUrl});
            
        res.redirect(`/${country}`);
        
   
    }).catch(function(error){
        console.log(error);
        
    });
    
});

exports.router = router;
exports.countryData = countryData;




