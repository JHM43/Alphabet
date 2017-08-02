

var audio = ["Alphabets/SCSS-Alpha1-A.wav", "SCSS-Alpha1-B.wav", "beep-03.mp3", "beep-04.mp3", "beep-05.mp3", "beep-06.mp3", "beep-07.mp3", "beep-08b.mp3", "beep-09.mp3"];

$('button.ci').click(function() {
	var i = $(this).attr('id').substring(1);
	new Audio(audio[i-1]).play();
});