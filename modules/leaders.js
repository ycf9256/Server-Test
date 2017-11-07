const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        default: ''
    },
    designation: {
        type: String,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false
    },
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;