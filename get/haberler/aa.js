const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var parseString = require('xml2js').parseString;
router.get('/tum',(req,res)=>{
    axios('https://www.aa.com.tr/tr/rss/default?cat=guncel').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = router;