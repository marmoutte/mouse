var win = require('nw.gui').Window.get();

var Tab = {
	'interval': undefined,

	'door': function() {
		Door.send({'class': 'keyboard', 'method': 'tap'}, {'key': 'tab'});
	},

	'move': function() {
		Tab.door();
	},

	'action': function(arg) {
		if(Tab.interval !== undefined)
			Tab.interval = window.clearInterval(Tab.interval);
		else
			Tab.interval = window.setInterval(Tab.move, arg);
	}
};