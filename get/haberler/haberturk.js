const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
var parseString = require("xml2js").parseString;
router.get("/tum", (req, res) => {
  axios("https://www.haberturk.com/rss")
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
  axios("https://www.haberturk.com/rss/ekonomi.xml")
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
  axios("https://www.haberturk.com/rss/spor.xml")
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
router.get("/magazin", (req, res) => {
  axios("https://www.haberturk.com/rss/magazin.xml")
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
router.get("/magazin", (req, res) => {
  axios("https://www.haberturk.com/rss/magazin.xml")
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
  axios("https://www.haberturk.com/rss/manset.xml")
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
  axios("https://www.haberturk.com/rss/kategori/video.xml")
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
router.get("/yazarlar", (req, res) => {
  axios("https://www.haberturk.com/rss/kategori/yazarlar.xml")
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
