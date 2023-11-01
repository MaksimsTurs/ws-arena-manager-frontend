export type GameClasses = {
	title: string
	src: string
	roles: ClassRole[]
}

export type ClassRole = Pick<GameClasses, 'src' | 'title'>