var mongoose = require('mongoose');

var LatencySchema = new mongoose.Schema({
    onetwo: {type:Number, default: 0},
    twothree: {type:Number, default: 0},
    threefour: {type:Number, default: 0},
    fourfive: {type:Number, default: 0},
    fivesix: {type:Number, default: 0},
    sixseven: {type:Number, default: 0},
    seveneight: {type:Number, default: 0},
    eightplus: {type:Number, default: 0}
});

module.exports = mongoose.model('latency', LatencySchema);

