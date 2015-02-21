module.exports = function(app,db) {

	var scrape = require('./controllers/scrape')(db);

    app.post('/api/post', scrape.add);
    app.post('/api/dummy', scrape.dummy);
	// Catch the rest
};