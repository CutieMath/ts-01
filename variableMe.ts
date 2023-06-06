let greetings: string = "Hi!";
let userId: number = 12345;

// declare a variable with a type
let hero: string;
function getHero(){
    return "Ironman";
}
hero = getHero();

// declare a variable in function with a type
function addTwo(num : number){
    return num + 2;
}
let result = addTwo(2);
console.log(result);

// declare multiple cariables in a function 
function signUpUser(name: string, email: string, isPaid: boolean){
    console.log(name, email, isPaid);
}
signUpUser("John", "test@email.com", true);


// declare default variables
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// declare return type for functions
const getWords = (word: string): string => {
    return word + " Okie";
}

// loop through an array
const heros = ["Ironman", "Spiderman", "Thor"];
heros.map((hero): string => {
    return hero + " is Avenger";
})

// declare return type
function consoleError(msg: string): void {
    console.log(msg);
}
consoleError("Error");

// the never type
function throwError(msg: string): never {
    throw new Error(msg);
}


console.log(greetings);
console.log(userId)
export {}