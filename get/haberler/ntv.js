const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
var parseString = require("xml2js").parseString;
router.get("/tum", (req, res) => {
  axios("https://www.ntv.com.tr/son-dakika.rss")
    .then((response) => {
      parseString(response.data, function (err, result) {
        if (err) {
          res.send(err);
        } else res.json(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/ekonomi", (req, res) => {
  axios("https://www.ntv.com.tr/ekonomi.rss")
    .then((response) => {
      parseString(response.data, function (err, result) {
        if (err) {
          res.send(err);
        } else res.json(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/spor", (req, res) => {
  axios("https://www.ntv.com.tr/spor.rss")
    .then((response) => {
      parseString(response.data, function (err, result) {
        if (err) {
          res.send(err);
        } else res.json(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/manset", (req, res) => {
  axios("https://www.ntv.com.tr/gundem.rss")
    .then((response) => {
      parseString(response.data, function (err, result) {
        if (err) {
          res.send(err);
        } else res.json(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/video", (req, res) => {
  axios("https://www.ntv.com.tr/video.rss")
    .then((response) => {
      parseString(response.data, function (err, result) {
        if (err) {
          res.send(err);
        } else res.json(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/teknoloji", (req, res) => {
  axios("https://www.ntv.com.tr/teknoloji.rss")
    .then((response) => {
      parseString(response.data, function (err, result) {
        if (err) {
          res.send(err);
        } else res.json(result);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/fotogaleri", (req, res) => {
    axios("https://www.ntv.com.tr/galeri.rss")
      .then((response) => {
        parseString(response.data, function (err, result) {
          if (err) {
            res.send(err);
          } else res.json(result);
        });
      })
      .catch((err) => {
        res.send(err);
      });
  });
module.exports = router;
