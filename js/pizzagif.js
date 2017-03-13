var gifs = ['https://media.giphy.com/media/syGHYCgsScysM/giphy.gif', 'https://media.giphy.com/media/3oEduXWSTEroC5U7aE/giphy.gif ', 'https://media.giphy.com/media/26xBtRnYfs2mYF4vS/giphy.gif', 'http://68.media.tumblr.com/a0177022ac5d6a56302f572382217236/tumblr_mtm7pm0s2M1qmk3pno1_400.gif', 'http://68.media.tumblr.com/852942ed6ec838a3ffe4a8d443f50632/tumblr_mnvsg08z6I1rkb1ywo1_400.gif', 'https://media.giphy.com/media/yoJC2EyuKmTUgjlTgY/giphy.gif', 'https://media.giphy.com/media/mMlQIWBCiaLNm/giphy.gif', 'https://media.giphy.com/media/4jUv5WgsH8waA/giphy.gif', 'https://media.giphy.com/media/qszkiEv7YcqCA/giphy.gif', 'https://media.giphy.com/media/ERHjRf12yMGC4/giphy.gif', 'https://media.giphy.com/media/rD5Z2jab2CcKs/giphy.gif', 'http://68.media.tumblr.com/a8fdfd2f4d49bf0a05e3aecd9f67cbc2/tumblr_mna0j4URQU1ratk55o1_500.gif', 'https://media.giphy.com/media/iWTLeWNSyvJUk/giphy.gif', 'https://media.giphy.com/media/iJa6kOfJ3qN7a/giphy.gif', 'https://media.giphy.com/media/Kstf0uu1By6yc/giphy.gif', 'https://media.giphy.com/media/j7LWINWXSiAx2/200.gif', 'https://media.giphy.com/media/fcTGy1cfmisFO/giphy.gif', 'http://68.media.tumblr.com/tumblr_m19f5mrD6u1qh0vhjo1_250.gif', 'https://media.giphy.com/media/MCPLmUyk9dbDW/giphy.gif', 'https://media.giphy.com/media/LxgG70UrRnEWs/giphy.gif', 'https://media.giphy.com/media/jaew8U9a2fywg/giphy.gif', 'https://media.giphy.com/media/yarTdzAdCLfwY/200.gif', 'https://media.giphy.com/media/jCphtO2RIogog/giphy.gif', 'https://media.giphy.com/media/13MmYjQPkWScQ8/giphy.gif', 'https://media.giphy.com/media/zuqZd7biqQR0I/giphy.gif', 'https://media.giphy.com/media/119yYldJ8IJteg/giphy.gif', 'https://media.giphy.com/media/i4CmjXdzTvoME/giphy.gif', 'https://media.giphy.com/media/A2m6fhZkxeRCo/giphy.gif', 'https://media.giphy.com/media/OrTqfH24gxa5G/giphy.gif', 'https://media.giphy.com/media/115HAgOHLtAroQ/giphy.gif', 'https://media.giphy.com/media/A0U9aoy8cVltK/giphy.gif', 'https://media.giphy.com/media/72hLVmgkfhAqY/giphy.gif', 'https://media.giphy.com/media/SuttTIYHMXg40/giphy.gif', 'https://media.giphy.com/media/106Ka0bkuCt2Eg/giphy.gif','https://media.giphy.com/media/JjgFagXURIIne/giphy.gif','https://media.giphy.com/media/3HQdFZC48A8co/giphy.gif','https://media.giphy.com/media/AOQON3Z6kZUZ2/giphy.gif','https://media.giphy.com/media/KBuMnwY9AboMU/giphy.gif','https://media.giphy.com/media/ykXMAlDInVh1m/giphy.gif','https://media.giphy.com/media/Ek00b0WtMLiCs/giphy.gif','https://media.giphy.com/media/12SgVag3n0Ow4U/giphy.gif','https://media.giphy.com/media/8nFLBzhEWLYty/giphy.gif','https://media.giphy.com/media/Oi17nysP1JHgI/giphy.gif','https://media.giphy.com/media/bX5ebAYPUJjgs/giphy.gif','https://media.giphy.com/media/ECWGIo8YDc3Xq/giphy.gif','https://media.giphy.com/media/11R2XfWlTaBu2Q/giphy.gif','https://media.giphy.com/media/Ok6hqlXkasGfS/giphy.gif','https://media.giphy.com/media/KEjnp4SX4lH2w/giphy.gif','https://media.tenor.co/images/46f2e85a42843dacf114dfc730fe4364/tenor.gif','https://media.giphy.com/media/KP5J5Ss9moWaI/giphy.gif'];

var l = gifs.length,
	wrapper = document.body,
	lastNum = 0;
console.log(l);
//MAKE IT RAIN 💵💴💷💶
(window.gifRain = function() {

	var gif = document.createElement('div');

	var randomNum = Math.floor((Math.random() * l) + 0);
	//	Make it a little extra random which gif is choosen
	while (lastNum == randomNum) {
		randomNum = Math.floor((Math.random() * l) + 0);
	}
	//Randon top/left
	var randomTop = (Math.floor(Math.random() * (document.body.clientHeight - 200)) + 200) * -1,
		randomLeft = Math.floor(Math.random() * (document.body.clientWidth - 300)) + 1;

	//Random width/height and random transition time
	var wANDh = (Math.floor(Math.random() * 200) + 75),
		seconds = (Math.floor(Math.random() * 5) + 5);

	gif.classList += 'gif';
	gif.style.backgroundImage = 'url(' + gifs[randomNum] + ')';
	gif.style.left = randomLeft + 'px';
	gif.style.top = randomTop + 'px';
	gif.style.width = wANDh + 'px';
	gif.style.height = wANDh + 'px';
	gif.style.transition = "transform " + seconds + 's linear';

	lastNum = randomNum;
	wrapper.appendChild(gif);

	//Set top to trigger animation
	setTimeout(function() {
		gif.style.transform = "translateY(" + (document.body.clientHeight * 2) + 'px)';
	}, 100)

	//Remove old gifs
	setTimeout(function() {
		wrapper.removeChild(gif);
	}, seconds * 1000);

})();

//Rain em down baby
setInterval(function() {
	gifRain();
}, 500);
