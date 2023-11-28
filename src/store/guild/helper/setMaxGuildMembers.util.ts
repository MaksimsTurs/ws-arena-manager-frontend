const setMaxGuildMembers = (guildLVL: number): number => {
  switch(guildLVL) {
    case 1:
      return 15
    case 2:
      return 20
    case 3:
      return 30
    case 4:
      return 40
    case 5:
      return 50
    case 6:
      return 60
    case 7:
      return 70
    case 8:
      return 80
    case 9:
      return 90
    case 10:
      return 100
    case 11:
      return 100
    case 12:
      return 100
    default:
      return 0
  }
}

export default setMaxGuildMembers