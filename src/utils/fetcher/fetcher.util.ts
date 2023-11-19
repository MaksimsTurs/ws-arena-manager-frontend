import { ServerResponseError } from "./fetcher.type"

const Fetcher = {
	baseURL: '',
	createURL: function (URL: string) {
		switch (URL) {
			case '/':
				return URL
			default:
				return `${this.baseURL}${URL}`
		}
	},
	get: async function <T>(URL: string) {
		const fetchResponse: Response = await fetch(this.createURL(URL))
		const fetchJSON: T = await fetchResponse.json()

		if(!fetchResponse.ok) throw((fetchJSON as ServerResponseError).message)

		return fetchJSON
	},
	post: async function <T>(URL: string, body: any) {
		const fetchResponse: Response = await fetch(this.createURL(URL), {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		})
		const fetchJSON: T = await fetchResponse.json()

		if(!fetchResponse.ok) throw((fetchJSON as ServerResponseError).message)

		return fetchJSON
	}
}

export default Fetcher
