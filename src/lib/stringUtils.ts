export const toTitleCase = (str: string) => {
	return str.replace(
		/\w\S*/g,
		(str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
	);
};
