import axios from "axios";

export const api = axios.create({
	baseURL:
		"https://api-rest-beryl.vercel.app/",
});

export const buscar = async (
	url,
	setData
) => {
	const respuesta = await api.get(url);
	setData(respuesta.data);
};
