var episodesList = document.getElementById("episodes-list");
var videoPopup = document.getElementById("video-popup");
var videoPlayer = document.getElementById("video-player");
var closeButton = document.getElementById("close-button");

for (var i = 1; i <= 150; i++) {
	var episodeLink = document.createElement("a");
	episodeLink.textContent = "Episódio " + i;
	episodeLink.setAttribute("href", "https://cdn05.novelasflix.top/NOV/UGA/UGAzJ8ZbkUekz24eeeVxdBUi" + pad(i, 3) + ".mp4");
	episodeLink.addEventListener("click", function(event) {
		event.preventDefault();
		var videoUrl = this.getAttribute("href");
		videoPlayer.setAttribute("src", videoUrl);
		videoPopup.style.display = "block";
	});
	var episodeItem = document.createElement("li");
	episodeItem.appendChild(episodeLink);
	episodesList.appendChild(episodeItem);
}

closeButton.addEventListener("click", function() {
	videoPlayer.pause();
	videoPopup.style.display = "none";
});

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}
