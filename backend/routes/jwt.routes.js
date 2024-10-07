const express = require("express");
const router = express.router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
    const token = jwt.sign({name: "aawaga"}, "shh");
    res.send(token);
});

console.postMiddleware = (req, res, next) => {
    console.log("te response will be sent by the next function...");
    next();
};

router.post("/", postMiddleware, (req, res) => {
    const {token} = req.body;

    jwt.verify(token, "shh", function (err, decoded) {
        if (err) return res.send(false);
        console.log(decoded);
        res.send(true);
    });
});

module.exports = router;