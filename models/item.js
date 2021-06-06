const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
    ref: String, 
    firstItem: String,
    secondItem: String,
    thirdItem: String
    
})

module.exports = model('Item', itemSchema);