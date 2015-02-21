/**
 * Created by Ralii on 21.2.15.
 */
module.exports = function(db){
    var latencyModel = require('../models/latency');
    return {
        add: function (req, res) {
            var json = JSON.parse(req.param('datapoint'));
            console.log(json.responsetime);
            res.send('HAI');
            analyseLatency(json.responsetime);
        },
        dummy: function(req,res) {
            new latencyModel({
            }).save();
        }
    };

    function analyseLatency(latency){
        var moi = "";
        if(latency < 200){
            latencyModel.findOneAndUpdate({upsert:true},function(err,docs){
                console.log(docs[0].onetwo);
               new latencyModel({
                   onetwo: docs[0].onetwo +1
               }).save(function(err,docs){
                       if(!err){
                       }
                   })
            });


        } else if(latency > 200 && latency < 300) {
            latencyModel.find(function(err,docs){
                new latencyModel({
                    twothree: docs.twothree +1
                }).save(function(err,docs){
                        console.log(docs);
                    })
            });
        } else if(latency > 300 && latency < 400) {
            latencyModel.find(function(err,docs){
                new latencyModel({
                    threefour: docs.fourfive +1
                }).save(function(err,docs){
                        console.log(docs);
                    })
            });
        } else if(latency > 400 && latency < 500) {
            latencyModel.find(function(err,docs){
                new latencyModel({
                    fivesix: docs.fivesix +1
                }).save(function(err,docs){
                        console.log(docs);
                    })
            });
        } else if(latency > 500 && latency < 600) {
            latencyModel.find(function(err,docs){
                new latencyModel({
                    sixseven: docs.sixseven +1
                }).save(function(err,docs){
                        console.log(docs);
                    })
            });
        } else if(latency > 600 && latency < 700) {
            latencyModel.find(function(err,docs){
                new latencyModel({
                    seveneight: docs.seveneight +1
                }).save(function(err,docs){
                        console.log(docs);
                    })
            });
        } else if(latency > 700) {
            latencyModel.find(function(err,docs){
                new latencyModel({
                    eightplus: docs.eightplus +1
                }).save(function(err,docs){
                        console.log(docs);
                    })
            });
        }
    }


};