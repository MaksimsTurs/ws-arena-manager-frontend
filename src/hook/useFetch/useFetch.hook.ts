import { useState, useEffect } from 'react'

import Fetcher from '@/utils/fetcher/fetcher.util'

const useFetch = <T>(
	URL: string,
	body?: any,
	statement?: boolean,
	deps?: any | any[]
) => {
	const [data, setData] = useState<T | undefined>(undefined)
	const [error, setError] = useState<string>('')
	const [isLoading, setLoading] = useState<boolean>(true)

	useEffect(() => {
			const fetchURL = async () => {
				setLoading(true)
				setError('')

				try {
					const fetchJSON: T = body ? await Fetcher.post(URL, body)	: await Fetcher.get(URL)
					setData(fetchJSON)
				} catch (error) {
					setError(error as string)
				}
				setLoading(false)
			}

			switch (statement) {
				case true:
					fetchURL()
					break
				case false:
					setLoading(false)
					break
			}
		}, Array.isArray(deps) ? deps : [deps])

	return { data, error, isLoading }
}

export default useFetch
