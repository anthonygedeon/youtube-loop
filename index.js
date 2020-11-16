(() => {
	const videoPlayer = document.querySelector('video');

	const ATTRIBUTE_NAME = 'loop';

	const OBSERVER_CONFIG = {
		characterData: false,
		attributes: true,
		childList: true,
	};

	function setVideoLoop() {
		const isLooping = videoPlayer.getAttribute(ATTRIBUTE_NAME)
			? true
			: false;

		if (!isLooping) {
			videoPlayer.toggleAttribute(ATTRIBUTE_NAME);
		}
	}

	function simulateLoop(mutations, observer) {
		console.log('loop attribute changed');
	}

	const videoLoopObserver = new MutationObserver(simulateLoop);

	videoLoopObserver.observe(videoPlayer, OBSERVER_CONFIG);

	setVideoLoop();
})();
