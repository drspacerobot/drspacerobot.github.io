//Global Variables
var mouseHint = document.getElementById("hint"),
	otTitle = document.getElementById("otTitle"),
	changeSlide = document.getElementById("changeSlide"),
	sTop = document.getElementById("top"),
	sSide = document.getElementById("sSide"),
	reflection = document.getElementById("reflection"),
	sReflection = document.getElementById("sReflection"),
	descSlider = document.getElementById("descSlider"),
	descriptionContainer = document.getElementById("descriptionContainer"),
	count = 1,
	clicked = false,
	whichLetter = 0,
	sSpan = document.getElementsByClassName('otTitleChar').length;

var sImages = ["url(http://i.imgsafe.org/f0a778861b.png)", "url(http://i.imgsafe.org/5c330ca0ef.jpg)", "url(http://i.imgsafe.org/b3e6055c29.jpg)", "url(http://i.imgsafe.org/b3db26691b.jpg)"];

//Used to get random colors
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Animate color change on #otTitle
setInterval(function() {
	rColor = getRandomColor();
	if (whichLetter < sSpan + 6) {
		if (whichLetter > 5) {
			otTitle.children[(whichLetter - 6)].style.color = 'whitesmoke';
		}
		if (whichLetter < sSpan) {
			otTitle.children[whichLetter].style.color = rColor;
			var tColor = getRandomColor().toString();
			otTitle.children[whichLetter].style.textShadow = '0px 0px 10px ' + tColor;
		}
		whichLetter++;
	} else if (whichLetter > sSpan + 5) whichLetter = 0;
}, 75)

//Scroll animation
function scrollAnim(elem, eHeight) {
	slideAnim(count);
	descSlider.style.top = ((eHeight * -1) * count) + 'px';
	count++;
	if (count > 3) count = 0;
}
//Changes slides
function slideAnim(c) {
	sSide.style.backgroundImage = sImages[c];
	reflection.style.backgroundImage = sImages[c];
	sReflection.style.backgroundImage = sImages[c];
	sTop.style.backgroundImage = sImages[c];
}

//Listener for button click
changeSlide.addEventListener("click", function() {
	var $this = this,
		sHeight = descriptionContainer.getBoundingClientRect().height;
	//Disable click
	$this.style.pointerEvents = "none";

	//Scroll description window
	scrollAnim(descriptionContainer, sHeight);

	//Enable Click
	setTimeout(function() {
		$this.style.pointerEvents = "auto";
	}, 750)

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
window.onresize = function() {

};
