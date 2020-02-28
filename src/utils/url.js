export const getBaseURL = () => {
	const baseURL = document.currentScript.getAttribute('src');
	const relativeURL = baseURL.substr(1, baseURL.length - 1);
	const absURL = new URL(baseURL, document.baseURI).href;
	let finalURL = absURL
		.replace(window.location.origin.toString(), '')
		.replace(relativeURL, '');

	// dev code
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		finalURL = '';
	}

	return finalURL;
};
