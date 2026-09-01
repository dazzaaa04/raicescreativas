import fs from 'node:fs';
import path from 'node:path';

export type FolderProduct = {
	num: string;
	title: string;
	image: string;
};

const IMAGE_RE = /\.(png|jpe?g|webp)$/i;

function sortByNumber(a: string, b: string): number {
	const na = parseInt(path.parse(a).name, 10) || 0;
	const nb = parseInt(path.parse(b).name, 10) || 0;
	return na - nb;
}

export function getProductsFromFolder(
	folder: string,
	urlPrefix: string,
	titleFn: (num: string) => string
): FolderProduct[] {
	const dir = path.join(process.cwd(), 'public', folder);
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((f) => IMAGE_RE.test(f))
		.sort(sortByNumber)
		.map((f) => {
			const num = path.parse(f).name;
			return {
				num,
				title: titleFn(num),
				image: `${urlPrefix}/${f}`,
			};
		});
}

export function formatFolderName(name: string): string {
	return name.charAt(0).toUpperCase() + name.slice(1);
}

export function getSubfolders(baseFolder: string): string[] {
	const dir = path.join(process.cwd(), 'public', baseFolder);
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name)
		.sort((a, b) => a.localeCompare(b, 'es'));
}
