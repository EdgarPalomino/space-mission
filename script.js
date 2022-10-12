// Loading the Rocket Engine and Wind Fall audios to avoid delays while playing them

var rocketAudio = new Audio("Rocket Engine.mp3");
var windAudio = new Audio("Wind Fall.mp3");

// Making the web page scroll to the first frame right after loading

history.scrollRestoration = "manual";
var firstFrame = document.getElementsByClassName("first-frame")[0];
firstFrame.scrollIntoView();

// -------------------------------------------------- \\

// Adding event listeners to all rockets to make them slide-in and slide-out and make the frames fade-in and fade-out after scrolling over them

var numberOfFrames = 6;
var ordinalNumbers = ["first", "second", "third", "fourth", "fifth", "sixth"];

for (let i = 0; i < numberOfFrames-1; i++) {

	let currentRocket = document.getElementById("Rocket-" + ordinalNumbers[i]);
	let newRocket = document.getElementById("Rocket-" + ordinalNumbers[i+1]);

	let currentFrame = document.getElementsByClassName(ordinalNumbers[i] + "-frame")[0];
	let newFrame = document.getElementsByClassName(ordinalNumbers[i+1] + "-frame")[0];

	currentRocket.addEventListener("wheel", function () {

		rocketAudio.currentTime = 0;
		rocketAudio.play();

		slideOutRocket(currentRocket);
		fadeOutFrame(currentFrame);
		setTimeout(function () { fadeInFrame(newFrame); slideInRocket(newRocket); }, 2.8*1000);

	});

}

function slideOutRocket(currentRocket) { currentRocket.classList.remove("slide-in"); currentRocket.classList.add("slide-out"); }
function fadeOutFrame(currentFrame) { currentFrame.className = currentFrame.className.replace("fade-in", "fade-out"); }
function fadeInFrame(newFrame) { newFrame.scrollIntoView(); newFrame.className = newFrame.className.replace("fade-out", "fade-in"); }
function slideInRocket(newRocket) { newRocket.classList.remove("slide-out"); newRocket.classList.add("slide-in"); }

// Note: These functions make the rockets slide-in and slide-out and make the frames fade-in and fade-out

// -------------------------------------------------- \\

// Adding an event listener to the "Back to Earth!" button to make the web page scroll to the first frame after clicking it

var backToEarthButton = document.getElementById("Button");
backToEarthButton.addEventListener("click", function () {

	windAudio.currentTime = 0;
	windAudio.play();

	showFrames();
	firstFrame.scrollIntoView({behavior: "smooth"});
	setTimeout(function () { window.location.reload() }, 1.4*1000);

});

function showFrames() {
	for (let i = 0; i < numberOfFrames-1; i++) {
		let currentFrame = document.getElementsByClassName(ordinalNumbers[i] + "-frame")[0];
		currentFrame.style.animation = "none";
		currentFrame.style.opacity = 1;
	}
}

// Note: The web page is reloaded after it scrolls to the first frame