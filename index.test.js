const sumOfObject = require('./index');
const solution = require('./system/solution');
const { getRandomInt, mixArray } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof sumOfObject({
		car: 20000,
		smoking: 2000,
		ring: 1000,
		glasses: 500
	});

	expect(type).toBe('number');
});

test('Тест. store: { car: 20000, smoking: 2000, ring: 1000, glasses: 500 }', () => {
	const res = sumOfObject({
		car: 20000,
		smoking: 2000,
		ring: 1000,
		glasses: 500
	});

	expect(res).toBe(23500);
});

test('Тест. store: {}', () => {
	const res = sumOfObject({});

	expect(res).toBe(0);
});

test('Тест. store: { shirt: 20, boots: 100, cap: 10, glasses: 50 }', () => {
	const res = sumOfObject({
		shirt: 20,
		boots: 100,
		cap: 10,
		glasses: 50
	});

	expect(res).toBe(180);
});

test('Тест. store: { toy: 5, coffee: 2, umbrella: 20, book: 10, burger: 3, shoes: 98 }', () => {
	const res = sumOfObject({
		toy: 5,
		coffee: 2,
		umbrella: 20,
		book: 10,
		burger: 3,
		shoes: 98
	});

	expect(res).toBe(138);
});

test('Auto: random outcomes', () => {
	let failed = false;

	const keys = ['shawarma', 'pepsi', 'ayran', 'chips', 'potato', 'oil', 'boots', 'toy', 'sugar', 'coffee', 'tea', 'salt', 'snickers', 'umbrella', 'shoes', 'gun', 'sunglasses']

	const getStore = () => {
		const obj = {};

		const mixed = mixArray(keys);
		const sliced = mixed.slice(getRandomInt(0, keys.length - 1));

		for (const key of sliced) {
			obj[key] = getRandomInt(0, 200) * (getRandomInt(1, 100));
		}

		return obj;
	};

	for (let i = 0; i < 100; i++) {
		const store = getStore();

		if (solution(store) !== sumOfObject(store)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});