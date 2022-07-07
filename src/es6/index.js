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