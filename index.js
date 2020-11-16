(() => {
	
	const currentVideoTime = document.querySelector('.ytp-time-current');

	const config = {
		characterData: true,
		childList: true,
	};

	const log = (mutationsList, observer) => {
		console.log('log');
	};

	const durationObserver = new MutationObserver(log);

	durationObserver.observe(currentVideoTime, config);

})();
