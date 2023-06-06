// declare
const superHeros: string[] = []
const superPowerRating: number[] = []
const superPowerRatingWithAltDeclaration: Array<number> = []
superHeros.push('Iron Man')
superPowerRating.push(100)

// declare object type
type SuperUser = {
    name: string,
    powerRating: number
}
const allSuperUsers: SuperUser[] = []
allSuperUsers.push({
    name: 'Iron Man',
    powerRating: 100
})

// declare multidimensional array
const MLModels: number[][] = [
    [255, 255, 255]
]
MLModels.push([1,2,3])
// MLModels.push("test") // this will give an error