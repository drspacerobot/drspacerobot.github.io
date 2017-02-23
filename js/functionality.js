//Global Variables
var mouseHint = document.getElementById("hint"),
	changeSlide = document.getElementById("changeSlide"),
	sTop = document.getElementsByClassName("top"),
	sSide = document.getElementsByClassName("sSide"),
	sReflection = document.getElementsByClassName("reflection"),
	descSlider = document.getElementById("descSlider"),
	descriptionContainer = document.getElementById("descriptionContainer"),
		count = 0,
		clicked = false;

var sImages = ["http://i.imgsafe.org/f0a78699c2.png","http://i.imgsafe.org/f3eab7b3d1.jpg","http://i.imgsafe.org/7661edda62.jpg","http://i.imgsafe.org/bdf8e7832d.jpg"];

//Scroll animation
function scrollAnim(elem, eHeight) {
	if (elem.scrollTop === (elem.scrollHeight - elem.offsetHeight) - 1) {
		for (var i = elem.scrollHeight; i > 0 ; i--) {
			setTimeout(function() {
				elem.scrollTop -= 5;
			}, i)
		}
	} else {
		for (var i = 0; i < eHeight; i++) {
			setTimeout(function() {
				elem.scrollTop += 1.25;
			}, i)
		}
		//console.log((elem.scrollHeight - elem.offsetHeight));
		//console.log(elem.scrollTop);
	}
}
//Changes slides
function slideAnim(c){
	
}

//Listener for button click
changeSlide.addEventListener("click", function() {
	if(!clicked){
		clicked = true;
		var sHeight = descSlider.children[0].offsetHeight;
	
		scrollAnim(descriptionContainer, sHeight);


		slideAnim(count);
		setTimeout(function(){
			clicked = false;
		},500)
	}
	
});

//Remove Scroll Hint
window.onscroll = function(e) {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		mouseHint.style.opacity = '0';
	} else {
		mouseHint.style.opacity = '1';
	}
}
//Resize functions
window.onresize = function(){
	descriptionContainer.scrollTop = 0;
};
