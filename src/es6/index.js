// ECMAScript 6
// # Default params
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// # Template Literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Antes de ECMAScript 6

function newFunction(name, age, country) {
    var name = name || "William";
    var age = age || 29
    var country = country || "CO"
    // Concat
    var concat = name + " " + age + " " + country
    return concat
}

console.log(newFunction())
console.log(newFunction("Hola", 35, "MX"))

// Con ECMAScript 6
function newFunction2(name = "Nombre", age = 10, country = "CO") {
    // Template Literals
    let concat = `${name} ${age} ${country} ES6`
    return concat
}

console.log(newFunction2())
console.log(newFunction2("Hola", 35, "MX"))


// Antes de ecmascript para separa una frase
let lorem = "Esta es una frase epica \n" +  
"otra frase";

// Con los templates literals no es necesario concatenar
let lorem2 = `Esto es un texto 
Con salto de linea
`

// Desctructuración  de elementos
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let person = {
    "name": "William",
    "age": 29,
    "country": "CO"
}

// Acceder a los datos  de la  forma típica
console.log (person.age)

// Destructuring
let {name, age, country} = person

console.log(name, age, country)