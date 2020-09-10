const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const longPlanSchema = new Schema({
    username:{type:String, required:true},
    type:"long-term",
    title:{type:String, required:true},
    details:{type:String, required:true},
    progress:{type:String},
    plandate:{type:Date},
    startdate:{type:Date},
    enddate: {type:Date},
    duration:{type:Number, required:true}
}, {timestamps:true});

module.export = longPlanSchema;

