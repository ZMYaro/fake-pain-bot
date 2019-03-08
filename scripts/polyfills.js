Array.prototype.pickRandom = function () {
	return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function () {
	return this.sort(() => Math.random() - 0.5);
};
