import { Order } from '../Order.js';

const order = new Order();

describe('Order', () => {
	test('Number of created products is the same of number of products', () => {
		expect(order.products.length).toBe(order.numberOfProducts);
	});

	test('Values of totalPrice, totalWeight e numberOfProducts are among the expected', () => {
		expect(order.totalPrice).toBeGreaterThan(0);
		expect(order.totalWeight).toBeGreaterThan(0);
		expect(order.numberOfProducts).toBeGreaterThan(0);
	});

	test('Related values of size as height, width and depth are among the expected', () => {
		expect(order.totalSize.height).toBeGreaterThan(0);
		expect(order.totalSize.width).toBeGreaterThan(0);
		expect(order.totalSize.depth).toBeGreaterThan(0);
	});

	test("Value of package type it's as expected", () => {
		expect([
			'plastic',
			'smallBox',
			'middleBox',
			'bigBox',
			'bubblePlastic'
		]).toContain(order.packageType);
	});

	test("Value of sending mode it's as expected", () => {
		expect(['Correios', 'shippingCompany']).toContain(order.sendingMode);
	});
});
