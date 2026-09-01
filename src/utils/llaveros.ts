import { getProductsFromFolder } from './folderProducts';

export type LlaveroProduct = {
	num: string;
	title: string;
	image: string;
};

export function getLlaveros(): LlaveroProduct[] {
	return getProductsFromFolder('llaveros', '/llaveros', (num) => `Llavero ${num}`);
}
