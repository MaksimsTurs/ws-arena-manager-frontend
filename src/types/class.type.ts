export type GameClasses = {
	className: string
	classIcon: string
	classPlayebelRoles: ClassRoles[]
	enableEquipType: string[]
	fractionBonuses: {
		healthBonus: number
		damageBonus: number
	}
}

export type ClassRoles = {
	className: string
	classIcon: string
}
