import { faker } from '@faker-js/faker';

export class Product {
	constructor() {
		this.generate();
	}

	generate() {
		// Valor
		this.price = faker.commerce.price(0, 1000, 2, '$');

		// Tamanho
		this.height = faker.datatype.number({ min: 1, max: 25 });
		this.width = faker.datatype.number({ min: 1, max: 25 });
		this.depth = faker.datatype.number({ min: 1, max: 25 });

		// Peso
		this.weight = faker.datatype.number({ min: 1, max: 200 });
	}
}
