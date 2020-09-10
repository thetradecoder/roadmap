const router = require('express').Router();
const longPlan = require('../models/long-plan.model');

router.route('/').get((req, res)=>{
    longPlan.find({})
    .then(data=>{res.json(data)})
    .catch(err=>console.log(err));
});


router.route('/add').post((req, res)=>{
    const {username, title, description, progress, startdate, deadline, duration, open }=req.body;
    const plan = new longPlan({username, type:"long-term", title, description, progress, plandate:new Date(), startdate, deadline, duration, open});
    plan.save()
    .then(()=>res.send('Plan Added'))
    .catch(err=>res.send(err))
});

router.route('/update/:id').put((req, res)=>{
    longPlan.findOneAndUpdate({_id:req.params.id}, req.body)
    .then(data=>res.send('updated'))
    .catch(err=>res.send(err))
});


module.exports = router;