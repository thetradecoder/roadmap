const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortPlanSchema = new Schema({
    username:{type:String, required:true},
    type:"short-term",
    title:{type:String, required:true},
    details:{type:String, required:true},
    progress:{type:String},
    plandate:{type:Date},
    startdate:{type:Date},
    enddate: {type:Date},
    duration:{type:Number}
}, {timestamps:true});

const shortPlan = mongoose.model('shortPlan', shortPlanSchema);


module.export = shortPlan;

