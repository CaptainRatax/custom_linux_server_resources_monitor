var os = require("os");
var os = require("os-utils");

console.log("Total RAM: " + Math.trunc(os.totalmem()) + " Mb");

var osu = require("node-os-utils");

var cpu = osu.cpu;

var refreshCpuUsage = setInterval(function() {
    cpu.usage().then((cpuUsagePercentage) => {
        console.log("CPU Usage: " + cpuUsagePercentage + " %");
    });
}, 1000);

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
}, 5000);