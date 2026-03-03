import { baseUrl } from "../constants";

export function request(url, method, data) {
	return fetch(baseUrl + url, {
		headers: {
			'content-type': 'application/json'
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined
	}).then(res => res.json())
}
