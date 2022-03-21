var express = require("express");
var router = express.Router();
var osu = require("node-os-utils");
var cpu = osu.cpu;

router.get("/usage", async(req, res) => {
    return cpu.usage().then((cpuUsagePercentage) => {
        let body = { cpu: { usage: cpuUsagePercentage } };
        return res.status(200).send(body);
    });
});

module.exports = router;