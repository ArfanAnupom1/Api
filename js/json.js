const user= { id: 1, name:'garib na amir', job:'actor'};
console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);


const shop= {
    owner: 'alia',
    adress: {
        street : 'khilkhar', 
        city : 'dhaka',
        country: 'BD'
    },
    product : ['laptop', 'mac', 'monitor', 'keyboard'],
    revinue : 45000,
    isOpen : true,
    isNew: false

};
console.log(shop);

const stringified1 = JSON.stringify(shop);
console.log(stringified1);
const obj = JSON.parse(stringified1);
console.log(obj);