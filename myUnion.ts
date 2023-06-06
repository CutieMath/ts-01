// When not sure what type is coming in 
// Note: Keep it strict
let score: number | string = 33;
score = "test";


// multiple object types
type UserType = {
    userName: string,
    email: string,
}
type AdminType = {
    adminName: string,
    email: string,
}
let cutie: UserType | AdminType = {
    userName: "Cutie",
    email: "123@email.com"
}
// Can also declare as Admin
cutie = {
    adminName: "Cutie",
    email: "test"
}


// multiple param types
function getDBId (id: string | number){
    console.log(`DB ID is ${id}`)
}
getDBId(123)
getDBId("123")
// checks in union type
function getDBId2 (id: string | number){
    if(typeof id === "string"){
      id.toLocaleLowerCase()
    } 
}


// multiple array types
const test: (string | number)[] = [1,2, "3"]


// literal type (only these values are allowed)
let seat: "A" | "B" | "C"
seat = "A"
// seat = "D" // this is not allowed