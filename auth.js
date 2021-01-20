const express = require("express");
const router = express.Router();


router.post('/login', (req, res, next) => {
    const body = req.body;
    if (body.username == "admin" && body.password == "admin") {
        return res.status(200).json({
            status: "ok",
            message: "Login Success"
        });
    } else {
        return res.status(401).json({
            status: "error",
            message: "Login Failed"
        });
    }    
});




module.exports = router;