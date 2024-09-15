export const randomNumber = (min, max) =>
	Math.floor(Math.random() * max) + min

export const clampNumber = (number, min, max) =>
	Math.min(Math.max(number, min), max)