export const exerciseOptions = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
	headers: {
		'X-RapidAPI-Key': 'c03104ce71msh41980be9aca927dp104ce5jsn2d2faf5eca47',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
};
