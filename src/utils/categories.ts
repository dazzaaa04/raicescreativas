export const CATEGORIES = [
	{
		slug: 'placas-para-mascotas',
		title: 'Placas para mascotas',
		color: '#b64f36',
		cover: '/placas.png',
	},
	{
		slug: 'decoracion-3d',
		title: 'Decoración 3D',
		color: '#324b20',
		cover: undefined as string | undefined,
	},
	{
		slug: 'regalos',
		title: 'Regalos',
		color: '#8b5e4a',
		cover: undefined as string | undefined,
	},
	{
		slug: 'llaveros',
		title: 'Llaveros',
		color: '#5c4033',
		cover: '/llaveros.jpeg',
	},
] as const;

export function slugFromCategory(category: string): string {
	return category
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

export function categoryFromSlug(slug: string): (typeof CATEGORIES)[number] | undefined {
	return CATEGORIES.find((c) => c.slug === slug);
}
