const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var parseString = require('xml2js').parseString;
router.get('/tum',(req,res)=>{
    axios('https://www.cnnturk.com/feed/rss/turkiye/news').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/ekonomi',(req,res)=>{
    axios('https://www.cnnturk.com/feed/rss/ekonomi/news').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/spor',(req,res)=>{
    axios('https://www.cnnturk.com/feed/rss/spor/news').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/yazarlar',(req,res)=>{
    axios('https://www.cnnturk.com/feed/rss/yazarlar').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/video',(req,res)=>{
    axios('https://www.cnnturk.com/feed/rss/turkiye/video').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/magazin',(req,res)=>{
    axios('https://www.cnnturk.com/feed/rss/magazin/news').then((response)=>{
        parseString(response.data, function (err, result) {
            
            if(err) {res.send(err)}
            else res.json(result)

            

        });
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = router;