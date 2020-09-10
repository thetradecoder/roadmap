const router = require('express').Router();
const shortPlan = require('../models/short-plan.model');

router.route('/').get((req, res)=>{
    shortPlan.find({})
    .then(data=>{res.json(data)})
    .catch(err=>console.log(err));
})