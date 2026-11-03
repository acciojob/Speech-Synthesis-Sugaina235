// Your script here.
msg.text=document.querySelector('[name="text"]').value;
function populateVoices() {
	voices=window.speechSynthesis.getVoices();
	voicesDropdown.innerHTML=voices.map(voice=>`<option value="${voice.name}">${voice.name}(${voice.lang})</option>`).join('')
		
}
function setVoice(){
	msg.voice=voices.find(voice=> voice.name===this.value);
	toggle();
}
function toggle(startOver=true){
	window.speechSynthesis.cancel();
	if(startOver){
		window.speechSynthesis.speak(msg)
	}
}
function setOption(){
msg[this.name]=this.value;
	toggle();
}
window.speechSynthesis.addEventListener('voicechanged',populateVoices);
voicesDropdown.addEventListener('change',setVoice);
options.forEach(option=>option.addEventListener('change',setOption));
speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click',()=>toggle(false));

populateVoices();	