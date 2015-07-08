var win = require("nw.gui");

var ShortcutManager = {
	'optionclose': {
		'key': "Ctrl+Alt+F",
		active : function() {
			if(Configuration.win)
				Configuration.win.close();
			Close.start();
		},
		failed : function(msg) {
			console.log(msg);
		}
	},
	'optiondial': {
		'key': "Ctrl+Alt+S",
		active: function() {
			Dial.call();
		},
		failed: function(msg) {
			console.log(msg);
		}
	}
}

var shortcutclose = new win.Shortcut(ShortcutManager.optionclose);
win.App.registerGlobalHotKey(shortcutclose);

var shortcutdial = new win.Shortcut(ShortcutManager.optiondial);
win.App.registerGlobalHotKey(shortcutdial);
