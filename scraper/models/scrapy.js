var mongoose = require('mongoose');

var ScrapySchema = new mongoose.Schema({
    domain: { type: String, required: true },
    responsetime: { type: Number},
    server: {type: String},
    framework: {type: String},
    widget: [{type: String}]

});


module.exports = mongoose.model('scrapy', ScrapySchema);
/**
 * Created by Ralii on 21.2.15.
 */
