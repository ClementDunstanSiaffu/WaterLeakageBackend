const mongoose = require('mongoose')
const WaterFlow = mongoose.model("WATERFLOW")

exports.leta = (req,res)=>{
    const {flowrate} = req.params
    const waterFlow = new WaterFlow()
    const date = new Date()
    const localDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
    const localTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
    waterFlow.flowrate = flowrate;
    waterFlow.date = localDate;
    waterFlow.time = localTime;
    waterFlow.save((err,docs)=>{
        if(!err){
            res.send("SUCCESS")
        }
    })
}

exports.pata = (req,res)=>{
    WaterFlow.find((err,docs)=>{
        if (!err){
            res.json(docs)
        }
    })
}

exports.last = async(req,res)=>{
    try{
        const docs  = await WaterFlow.find((err,docs)=>{
            if(!err){
                return docs
            }
        })
        const last_item = docs[docs.length-1]
        res.send(`${last_item.flowrate}`)
    }catch(err){
        console.log(err)
    }
    
}