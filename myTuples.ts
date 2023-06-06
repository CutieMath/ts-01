// only in TS
const normalUser: (string | number)[] = ['John', 25]
// in tuple, the order of the types matter
let tupleUser: [string, number, boolean]
tupleUser = ['John', 25, true]
// tupleUser = [123, "test", true] // this is not allowed


// tuple declare
let rgb: [number, number, number] = [255, 0, 0]

// type declare
type testUserType = [string, number]
const newTestUser : testUserType = ["John", 25]
