var config = require('../../config.js').googleApi;
var request = require('superagent');

var GoogleServices = {};

GoogleServices.startGoogleApi = function(){
	if(document.querySelector('script[id="google-api-client"]')) this.checkAuth();
	else misc.loadScript('https://apis.google.com/js/client.js', '', 'google-api-client', this.checkAuth);
};

GoogleServices.checkAuth = function(){
	gapi.auth.authorize({
		client_id:config.client_id,
		scope    :config.scopes.join(' '),
		immediate:'true'
	}, this.handleAuthResult);
};

GoogleServices.handleAuthResult = function(authResult){
	if(authResult && !authResult.error){
		GoogleServices.loadDocs();
	}else{
		console.log('Need authorization');
	}
};

GoogleServices.loadCalendar = function(){
	gapi.client.load('calendar', 'v3', this.listUpcomingEvents);
};

GoogleServices.loadGmail = function(){
	gapi.client.load('gmail', 'v1', _.bind(this.listMessages, this, this.listMessagesCallback));
};

GoogleServices.loadDocs = function(){
	gapi.client.load('drive', 'v2', _.bind(this.listDocs, this, this.listDocsCallback));
};

GoogleServices.loadContacts = function(){
	var accessToken = gapi.auth.getToken().access_token;
	request.get('https://www.google.com/m8/feeds/contacts/default/full?access_token=' + accessToken + '&alt=json')
		   .end(function(err, res){
		   		if(err) console.log('err', err);
		   		_.forEach(res.body.feed.entry, function(entry){
		   			console.log('--------------------------');
		   			_.forEach(entry['gd$email'], function(email){
		   				console.log('Email :', email.address);
		   			});
		   			_.forEach(entry['gd$phoneNumber'], function(numero){
		   				console.log('Numero :', numero['$t']);
		   			});
		   			_.forEach(entry['gd$postalAddress'], function(address){
		   				console.log('Address :', address['$t']);
		   			});
		   		});
		   });
};

GoogleServices.listUpcomingEvents = function(){
		var request = gapi.client.calendar.events.list({
		calendarId  :'primary',
		timeMin     :(new Date()).toISOString(),
		showDeleted :false,
		singleEvents:true,
		maxResults  :10,
		orderBy     :'startTime'
    });

    request.execute(function(resp) {
     	var events = resp.items;
      	console.log('Upcoming events:');

      	if (events.length > 0) {
      		_.forEach(events, function(event){
          		console.log(event);
          		var when = event.start.dateTime;
          		if (!when) {
           			when = event.start.date;
          		}
          		console.log(event.summary + ' (' + when + ')')
      		});
      	}else{
        	console.log('No upcoming events found.');
      	}
    });
};

GoogleServices.listMessages = function(callback){
	var getPageOfMessages = function(request, result) {
      	request.execute(function(resp) {
	        result = result.concat(resp.messages);
	        var nextPageToken = resp.nextPageToken;
	        if (nextPageToken) {
	          	request = gapi.client.gmail.users.messages.list({
		            'userId':'me',
		            'pageToken':nextPageToken,
		            'q':''
	          	});
	          	getPageOfMessages(request, result);
	        } else {
	          callback(result);
	        }
     	});
    };
    var initialRequest = gapi.client.gmail.users.messages.list({
      	'userId':'me',
      	'q':''
    });
    getPageOfMessages(initialRequest, []);
};

GoogleServices.listMessagesCallback = function(results){
	_.forEach(results, function(result){
		GoogleServices.getMessage(result.id, function(message){
	        console.log(message);
	    });
	});
};

GoogleServices.getMessage = function(messageId, callback){
	var request = gapi.client.gmail.users.messages.get({
        'userId':'me',
        'id':messageId
    });
    request.execute(callback);
};

GoogleServices.listDocs = function(callback){
	var retrievePageOfFiles = function(request, result) {
	    request.execute(function(resp) {
			result = result.concat(resp.items);
			var nextPageToken = resp.nextPageToken;
			if (nextPageToken) {
				request = gapi.client.drive.files.list({
			  		'pageToken': nextPageToken
				});
				retrievePageOfFiles(request, result);
			} else {
				callback(result);
			}
	    });
  	}
  	var initialRequest = gapi.client.drive.files.list();
  	retrievePageOfFiles(initialRequest, []);
};

GoogleServices.listDocsCallback = function(results){
	_.forEach(results, function(result){
		console.log(result);
	});
};

GoogleServices.authorize = function(){
	gapi.auth.authorize({
		client_id:config.client_id, 
		scope:config.scopes, 
		immediate: false
	}, this.handleAuthResult);
	 return false;
};

module.exports = GoogleServices;