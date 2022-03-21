var os = require("os");
var os = require("os-utils");
var express = require("express");
var app = express();
require("dotenv").config();

var cpuInfo = require("./routes/cpu");
var ramInfo = require("./routes/ram");
var diskInfo = require("./routes/disk");

var server = app.listen(process.env.PORT, () => {
    console.log("O server está à escuta na porta", server.address().port);
});

//CPU Info

app.use("/cpu", cpuInfo);

//RAM Info

app.use("/ram", ramInfo);

//Disk Info

app.use("/disk", diskInfo);

/* console.log("Total RAM: " + Math.trunc(os.totalmem()) + " Mb");

var refreshFreeMemory = setInterval(function() {
    console.log("Free RAM: " + Math.trunc(os.freemem()) + " Mb");
}, 1000);

var refreshUsedMemory = setInterval(function() {
    let usedRam = os.totalmem() - os.freemem();
    console.log("Used RAM: " + Math.trunc(usedRam) + " Mb");
}, 1000);

setTimeout(function() {
    clearInterval(refreshFreeMemory);
    clearInterval(refreshUsedMemory);
    clearInterval(refreshCpuUsage);
}, 5000); */