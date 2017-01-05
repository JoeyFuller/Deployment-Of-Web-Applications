var server = require('../src/server.js');
var request = require('supertest');

describe('API', function(){
	var server;
	beforeEach(function(){
		server = require('../src/server.js');

	});

	afterEach(function(){
		server.close();
	});

	it('Should return specified object', function testHealth(done){
		request(server)
			.get('/api/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { hello: "world"}, done);
		
	});

	it('/status should return specified healthy:true.', function testHealth(done){ //testing server status health
		request(server)
			.get('/api/status')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { healthy: true}, done);
		
	});

	it('/user/id should object with id.', function testHealth(done){  //possible test any user id? What function would this serve?
		request(server)
			.get('/api/user/347')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { user: { id: 347}} , done);
		
	});
});