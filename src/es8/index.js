// Junio de 2017

const data = {
    frontend: 'Carlos',
    backend: 'Felipe',
    design: 'Eduardo'
}

// Convierte en una matriz el objeto
// const entries  = Object.entries(data)

// Convierte en un array los valores del objeto
const values = Object.values(data)
console.log(values)

// Añadir elementos a un sting hasta completar el número que se asigna primero
const string = "H"
console.log (string.padStart(4, "!"))