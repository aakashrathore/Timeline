var events = require('./models/user.js');
module.exports = function(app){

	app.get('/', function(req, res){
		res.json({
			message: "Welcome to the timeline API"
		});
	});

	app.get('/events/', function(req, res){
		events.find(function(err, allEvents){
			if(err){
				res.send(err);
			}
			else{
				res.json(allEvents);
			}
		});
	});

	app.get('/events/:id', function(req, res){
		events.findById(req.params.id, function(err, event){
			if(err){
				res.send(err);
			}
			else{
				res.json(event);
			}
		});
	});

	app.post('/addEvent', function(req, res){
		var event = new events();
		event.eventName = req.query.name;
		event.age = req.query.age;
		event.field = req.query.field;
		event.save(function(err) {
            if (err)
                res.send(err);
            else
				res.json({ message: 'Event created!' });
        });
	});
}