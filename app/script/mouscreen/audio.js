var SoundEngine = {
	"audio": document.createElement('audio'),
	"play": function(arg) {
		arg = (!arg) ? Conf.sounds.default: arg;

		if(!Conf.sounds.enabled || !File.exists(Conf.sounds.path + arg)) return;

		SoundEngine.audio.setAttribute('src',Conf.sounds.path + arg);
		SoundEngine.audio.setAttribute('preload', 'auto');
		SoundEngine.audio.load();
		SoundEngine.audio.play();
		//console.log("SoundEngine.play(" + Conf.sounds.path + arg + " : " + Menu.new + ")");
	}
}