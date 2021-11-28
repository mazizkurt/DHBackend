const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var parseString = require('xml2js').parseString;
router.get('/parabirimleri',(req,res)=>{
    axios('https://api.genelpara.com/embed/para-birimleri.json').then((response)=>{
       res.json(response.data)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/dovizkurlari',(req,res)=>{
    axios('https://api.genelpara.com/embed/doviz.json').then((response)=>{
       res.json(response.data)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/altin',(req,res)=>{
    axios('https://api.genelpara.com/embed/altin.json').then((response)=>{
       res.json(response.data)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/kripto',(req,res)=>{
    axios('https://api.genelpara.com/embed/kripto.json').then((response)=>{
       res.json(response.data)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/borsa',(req,res)=>{
    axios('https://api.genelpara.com/embed/borsa.json').then((response)=>{
       res.json(response.data)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get('/parite',(req,res)=>{
    axios('https://api.genelpara.com/embed/parite.json').then((response)=>{
       res.json(response.data)
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = router;