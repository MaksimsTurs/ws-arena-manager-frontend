const firstLetterToUpperCase = (str: string): string => `${str.at(0)?.toUpperCase()}${str.substring(1, str.length)}`

export default firstLetterToUpperCase
