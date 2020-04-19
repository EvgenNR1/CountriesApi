const express = require('express');
const path = require('path');
const rootDirectory = require('../utils/path');
const axios = require('axios');
const mainData = require('./main');
const router = express.Router();

router.get("/*", function(req, res){

    let data = mainData.countryData[0];
    console.log(data);
    res.render('country',{
        pageTitle: data.name,
        imageFlag: data.imageUrl,
        countryName: data.name,
        domain: data.domain,
        calCode: data.calCode,
        capital: data.capital,
        region: data.region, 
        subregion: data.subregion,
        population: data.population,
        timezone: data.timezone,
        language: data.langInEnglish,
        currency: data.currency
    });
});

module.exports = router;