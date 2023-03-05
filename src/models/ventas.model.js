const mongoose = require("mongoose");
const ventas_schema = mongoose.Schema({

    client: {
        type: Object,
        requiere:true,
        id_client:{type:Number,require:true,unique:true},
        name:{type:String, require:true},
        addres: {
            type: Object,
            city: {type: String, require:true},
            birthday: {type: Date('YYY/MM/DD'), requiere:true},
            code_zip: {type: Number,requiere: true},
        },
    },

    invoice:{
        type:Object,
        require:true,
        date_invoice:{type:Date('YYY/MM/DD'), require:true},
        articles:{
            product:{type:Array, require:true},
            amount:{type:Array, require:true},
            price:{type:Array,require:true},
        },
        pay:{
            type:Object,
            require: true,
            PSE:{type:Boolean, require:false},
            cash:{type:Boolean, require:false},
            credit:{
                type:Object,
                require:false,
                titular:{type:String,require:true},
                number_card:{type:Number,require:true},
                CVC:{type:Number,requiere:true},
                date_card:{type:Date('YYY/MM/DD')},
            },
        }
    },
});
module.exports = mongoose.model("VentasCollection", ventas_schema);
