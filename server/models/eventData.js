const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number,
    gender:String,
    event:String
})

const EventData = mongoose.model("eventData",EventSchema);

module.exports = EventData;