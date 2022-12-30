import { Product } from '../Product.js';

const product = new Product();

describe('Testes de produto', () => {
	test('Value of price have currency symbol and it is between 0 and 1000', () => {
        expect(product.price).toMatch(/[$]\d+(.\d{1,2})?$/)
        
        const parsedPrice = Number(product.price.replace('$', ''))

		expect(parsedPrice).toBeGreaterThanOrEqual(0);
        expect(parsedPrice).toBeLessThanOrEqual(1000)
	});

	test('Values related of size as height, width and depth is between 1 and 25', () => {
		expect(product.height).toBeGreaterThanOrEqual(1);
		expect(product.height).toBeLessThanOrEqual(25);

		expect(product.width).toBeGreaterThanOrEqual(1);
		expect(product.width).toBeLessThanOrEqual(25);

		expect(product.depth).toBeGreaterThanOrEqual(1);
		expect(product.depth).toBeLessThanOrEqual(25);
	});

	test('Value of weight if between 1 and 200', () => {
		expect(product.weight).toBeGreaterThanOrEqual(1);
		expect(product.weight).toBeLessThanOrEqual(200);
	});
});
