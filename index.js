function sumOfObject(store) {
	let result = 0;

	for (let key in store) {
		result += store[key];
	}

	return result;
}

module.exports = sumOfObject;