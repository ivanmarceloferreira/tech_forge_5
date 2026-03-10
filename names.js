const users = [
    {
        id: 1,
        name: "Ana Silva",
        age: 17,
        active: true,
        email: "ana.silva@email.com"
    },
    {
        id: 2,
        name: "Bruno Costa",
        age: 25,
        active: false,
        email: "bruno.costa@email.com"
    },
    {
        id: 3,
        name: "Carla Mendes",
        age: 32,
        active: true,
        email: "carla.mendes@email.com"
    },
    {
        id: 4,
        name: "Diego Rocha",
        age: 15,
        active: true,
        email: "diego.rocha@email.com"
    },
    {
        id: 5,
        name: "Fernanda Lima",
        age: 41,
        active: false,
        email: "fernanda.lima@email.com"
    }
];






// Nomes de variáveis e métodos
// function calc(a, b) {
//     return a * b * 0.1;
// }

// let x = calc(100, 2);
// console.log(x);














let d = new Date();
let u = users.filter(u => u.active);
console.log(u);































































function calculateDiscount(price, quantity) {
    return price * quantity * 0.1;
}

let totalDiscount = calculateDiscount(100, 2);
console.log('O desconto é de ', totalDiscount);






let currentDate = new Date();
let activeUsers = users.filter(user => user.active);




































