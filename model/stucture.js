const mongoose = require('mongoose')

const waterFlowSchema = mongoose.Schema({
    flowrate:{
        type:Number
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
})

mongoose.model("WATERFLOW",waterFlowSchema)