export const SITE_TITLE = 'Raíces Creativas';
export const SITE_DESCRIPTION =
	'Catálogo de piezas impresas en 3D: decoración, placas para mascotas y objetos personalizados.';
export const LOGO = '/raicescreativas.png';

/** Cambia estos datos por los tuyos reales */
export const CONTACT_EMAIL = 'contacto@raicescreativas.com';
/** Número con código de país, sin + ni espacios. Ej: Colombia 3001234567 → '573001234567' */
export const CONTACT_WHATSAPP = '';
export const CONTACT_WHATSAPP_MESSAGE =
	'Hola, vi sus productos en Raíces Creativas y me gustaría pedir información.';
/** Usuario de Instagram, sin @. Dejar vacío si no usan. */
export const CONTACT_INSTAGRAM = '';

export function whatsappUrl(message = CONTACT_WHATSAPP_MESSAGE): string {
	if (!CONTACT_WHATSAPP) return '';
	const text = encodeURIComponent(message);
	return `https://wa.me/${CONTACT_WHATSAPP}?text=${text}`;
}

export function instagramUrl(): string {
	if (!CONTACT_INSTAGRAM) return '';
	return `https://instagram.com/${CONTACT_INSTAGRAM}`;
}

export function primaryContactHref(): string {
	return '/contacto';
}

export const COLORS = {
	green: '#324b20',
	terracotta: '#b64f36',
	light: '#f8f7f5',
	warm: '#faf8f6',
};
