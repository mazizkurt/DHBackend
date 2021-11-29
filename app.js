const express = require("express");
const app = express();
const haberTurk = require("./get/haberler/haberturk");
const cnn = require("./get/haberler/cnn");
const haberlercom = require("./get/haberler/haberlercom");
const ntv = require("./get/haberler/ntv");
const aa = require("./get/haberler/aa");
const Doviz = require("./get/doviz/index");
require("dotenv/config");

app.use("/get/haberler/haberturk", haberTurk);
app.use("/get/haberler/haberlercom", haberlercom);
app.use("/get/haberler/cnn", cnn);
app.use("/get/haberler/ntv", ntv);
app.use("/get/haberler/aa", aa);

app.use("/get/doviz", Doviz);

app.listen(process.env.PORT, () =>
  console.log(`${process.env.PORT} dinleniyor...`)
);
