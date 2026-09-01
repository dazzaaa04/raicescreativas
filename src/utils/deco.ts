import {
	formatFolderName,
	getProductsFromFolder,
	getSubfolders,
	type FolderProduct,
} from './folderProducts';

export type DecoTheme = {
	slug: string;
	title: string;
	count: number;
	cover?: string;
};

export function getDecoThemes(): DecoTheme[] {
	return getSubfolders('deco').map((slug) => {
		const items = getDecoItems(slug);
		return {
			slug,
			title: formatFolderName(slug),
			count: items.length,
			cover: items[0]?.image,
		};
	});
}

export function getDecoItems(theme: string): FolderProduct[] {
	return getProductsFromFolder(`deco/${theme}`, `/deco/${theme}`, (num) => {
		const label = formatFolderName(theme);
		return `${label} ${num}`;
	});
}

export function getDecoTotalCount(): number {
	return getDecoThemes().reduce((sum, t) => sum + t.count, 0);
}
