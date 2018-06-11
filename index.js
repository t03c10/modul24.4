const formatDate = (timeInSeconds) => {
	if (!timeInSeconds) {
		return '0s';
	};
	if (timeInSeconds < 60) {
		return `${timeInSeconds}s`;
	};
	const hours = Math.floor(timeInSeconds / 3600);
	let minutes = Math.floor(timeInSeconds / 60);
	const seconds = timeInSeconds % 60;
	if (timeInSeconds > 3600) {
		minutes = Math.floor(Math.floor(timeInSeconds % 3600) / 60);
	};

	return `${hours > 0 ? hours + 'h' : ''}${hours > 0 && (minutes > 0 || seconds > 0) ? ' ' : ''}${minutes > 0 ? minutes + 'm' : '' }${(hours > 0 || minutes > 0 ) && seconds > 0 ? minutes > 0 ? ' ' : '' : ''}${seconds > 0 ? seconds + 's' : ''}`;
}

module.exports = formatDate;