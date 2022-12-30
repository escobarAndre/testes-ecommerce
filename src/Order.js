import { Product } from './Product.js';
import { faker } from '@faker-js/faker';

export class Order {
	constructor() {
		this.products = [];
		this.numberOfProducts = faker.datatype.number({ min: 1, max: 10 });

		this.generate();

		this.totalPrice = this.getTotalPrice()
		this.totalWeight = this.getTotalWeight()
		this.totalSize = this.getTotalSize()	

		this.packageType = this.getPackageType()
		this.sendingMode = this.getSendingMode()
	}

	generate() {
		for (let i = 0; i < this.numberOfProducts; i++) {
			const product = new Product();

			this.products = [...this.products, product];
		}
	}

	getTotalPrice() {
		return this.products.reduce(
			(acc, product) => acc + Number(product.price.replace('$', '')),
			0
		);
	}

	getTotalWeight() {
		return this.products.reduce((acc, product) => acc + product.weight, 0);
	}

	getTotalSize() {
		return this.products.reduce(
			(acc, product) => {
				acc.height = acc.height + product.height;
				acc.width = acc.width + product.width;
				acc.depth = acc.depth + product.depth;

				return acc;
			},
			{
				height: 0,
				width: 0,
				depth: 0
			}
		);
	}

	getRootCubic() {
		const totalSizes = this.getTotalSize();

		const cubicFootage =
			totalSizes.height * totalSizes.width * totalSizes.depth;
		
		const rootCubic = Math.pow(cubicFootage, 1/3)

		return rootCubic
	}

	getPackageType() {
		const totalSizes = this.getTotalSize();

		const cubicFootage =
			totalSizes.height * totalSizes.width * totalSizes.depth;
		
		const rootCubic = this.getRootCubic()

		if (rootCubic <= 20) return 'plastic';
		else if (rootCubic > 20 && rootCubic <= 40)
			return 'smallBox';
		else if (rootCubic > 40 && rootCubic <= 80)
			return 'middleBox';
		else if (rootCubic > 80 && rootCubic <= 120)
			return 'bigBox';
		else return 'bubblePlastic';
	}

	getSendingMode() {
		const totalWeight = this.getTotalWeight()
		const rootCubic = this.getRootCubic()

		if(totalWeight < 650 && rootCubic >= 60) return 'Correios'

		return 'shippingCompany'
	}
}