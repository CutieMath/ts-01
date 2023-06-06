// Normal JS object
const User = {
    name: "Cutie", 
    email: "cutie@email.com",
    isActive: true,
}

// Declare a function 
function createUser({name: string, isPaid: boolean}){
}
createUser({name: "John", isPaid: true});


// Declare a function with return type
function createCourse(): {name: string, price: number}{
    return {name: "test", price: 123}
}

// Type alias
type UserType = {
    name: string,
    email: string, 
    isPaid: boolean,
}
function createUserWithType(user: UserType): UserType{
    return {name:"okie", email: "123@email.com", isPaid: true};
}
createUserWithType({name: "Test", email: "", isPaid: true})


// More type alias
type UserType2 = {
    readonly _id: string, 
    name: string,
    email: string, 
    isPaid: boolean,
    creditCardDetails?: number // optional 
}
let myUser2: UserType2 = {
    _id: "123",
    name: "Cutie",
    email: "test@email.com",
    isPaid: true,
}
myUser2.email = "test"
// myUser2._id = "test" // this will give an error


// combine types (use case example. Not a good practice)
type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    holderName: string
}


export {}