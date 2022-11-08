const fs = require('fs');
const path = require('path');

const getRandomInt = (min, max, exclude = []) => {
	const randomInt = Math.floor(min + Math.random() * (max + 1 - min));

	if (exclude.includes(randomInt)) {
		return getRandomInt(min, max, exclude);
	} else {
		return randomInt;
	}
};

const findString = async (str) => {
	const fileData = await new Promise((res, rej) => {
		fs.readFile(path.join('index.js'), 'utf8', (err, data) => {
			if (err) {
				rej(err);
			}

			res(data);
		});
	});

	return fileData.includes(str);
};

const mixArray = (arr) => {
	let j;
	let temp;
	const mixedArr = [...arr];

	for (let i = mixedArr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));

		temp = mixedArr[j];
		mixedArr[j] = mixedArr[i];
		mixedArr[i] = temp;
	}

	return mixedArr;
};

module.exports = {
	getRandomInt,
	findString,
	mixArray
};