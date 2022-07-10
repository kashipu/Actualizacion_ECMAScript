const obj = {
    name: 'William',
    age: '29',
    country: 'CO'
}

let { name, ...all } = obj;
console.log(name, all)

const obj1 =  {
    cuenta: 10234,
    cedula: 10234334293,
    nombre: "Carlos"
}

const obj2 = {
    ...obj1,
    token: 235342123
}

console.log(obj2)