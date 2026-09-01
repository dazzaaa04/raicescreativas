import { getProductsFromFolder } from './folderProducts';

export type PlacaProduct = {
	num: string;
	title: string;
	image: string;
};

export function getPlacas(): PlacaProduct[] {
	return getProductsFromFolder('placas', '/placas', (num) => `Placa ${num}`);
}
