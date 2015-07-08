

var Sound = {
	'target': 'sound',
	'activated': Conf.sounds.enabled,

	change: function(arg) {
		Conf.sounds.enabled = !Conf.sounds.enabled;
	},
	build: function (dom) {
		var label = document.createElement('label');
		var input = document.createElement('input');

		var textContent;
		if(Lang.locale === 'fr')
			textContent = "Son";
		if(Lang.locale === 'en')
			textContent = "Sound";
		if(Lang.locale === 'ja')
			textContent === "??"

		label.setAttribute('for', Sound.target);
		label.textContent = textContent;
		input.setAttribute('id', Sound.target);
    	input.setAttribute('type', 'checkbox');
    	input.addEventListener('change', Sound.change, false);
    	if (Sound.activated)
      		input.setAttribute('checked', 'checked');
    	label.appendChild(input);
    	dom.appendChild(label);
	}

}