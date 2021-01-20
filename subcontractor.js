const express = require("express");
const router = express.Router();

const Job = require("../model/job");
const Subcontractor = require("../model/subcontractor");

router.get('/get', (req, res, next) => {
    Subcontractor.find().then(response => {
        console.log(response);
        return res.status(200).json({
            status: "ok",
            response: response
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            data: err
        });
    });
});
  

router.get('/jobs', (req, res, next) => {
    console.log(req.query);
    Job.findOne(req.query).then(Job => {
      console.log(Job);
      return res.status(200).json(Job);
    }).catch(err => {
      return res.status(500).json({
        status: "error",
        data: err
      });
    });
});


module.exports = router;