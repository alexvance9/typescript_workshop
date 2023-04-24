// commands: tsc to compile, then node index.js to run. OR ts-node index.ts w/o compiling- will ignore tsconfig

// five main types:
// Number(num)
let num: number = 6;
let x = 4;
// String(str)
let str: string = 'string'
// Boolean(bool)
let bool: boolean = true
let variable: any = false
// Void
// Null

// complex types:
//  -Arrays
// ex: array of strings
let strArray: string[] = [] //or Array<string>
//  -Tuples:fixed length array where each item has paritcular type
// JS doesnt have explicit tuple type, so still have access to all Array methods
let users: [number, string] = [9, 'nine']
users.push(5, 'five') //not user.push(false)
//  -Enum: object-like thing that contains constants that wont be reassigned
enum Size {small=5};
//  -Union Types: can be either thing
let union: number | string;

// Type Narrowing
function printUpperCase(x: number | string | any[] | null){
    if (!x) return
    if (typeof x === 'number') return

    x.length
    // if (Array.isArray)
}

// Declaring Objects
// each property must be specified by name
const person: {id: number, user: string} = {
    id: 1,
    user: 'alex'
}
// if unsure what keys will exist, use syntax 
// {
//     [char: string]: number means string key must have number value
// }

// Function signatures
// good practice to specify input and return types of functions
function myLog (x: any): boolean {
    return true;
}

// Creating Interfaces and Types
interface userInterface {
    name: string, pw: string, id: number, isSub: boolean
}
// interfaces can be modified during runtime by redeclaring/overwriting/adding properties
// types have same syntax, cannot be modified


const printUser = (user: userInterface): string => {
    return user.name
}