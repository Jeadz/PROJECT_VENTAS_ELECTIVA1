const mongoose = require("mongoose");
const ventas_schema = mongoose.Schema({

    client: {
        type : Object,
        require : true,
        id_client : {type: Number, require:true, unique: true},
        name : {type: String, require: true},
        addres:{
            type : Object,
            require : true,
            city: {type: String, require: true},
            code_zip: {type: String, require: true},
        }
    },

    bill_number: {
        type : Object,
        require: true,
        unique: true,
        product: {
            type: Object,
            require: true,
            name : {type : String, require: true},
            amount : {type : Number, require : true},
            price : {type: Number, require: true},
        },
    },

    pay_type: {
        type : Object,
        require : true,
        ways: {
            type: Object,
            require: true,
            PSE:{type: Number, require: false},
            cash:{type: Number, requiere:false},
            credit:{
                type: Object,
                requiere: false,
                card_number: {type: Number, requiere: true},
                titular_name:{type: String, requiere: true},
                date_card: { type: Date, requiere: true},
                pass_card : {type: Number, require:true},
            },
        },
    },

});
module.exports = mongoose.model("VentasCollection", ventas_schema);
