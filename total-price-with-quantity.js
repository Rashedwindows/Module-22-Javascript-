/* const cart = [

    {name : "laptop", price : 43000 , quantity : 1},
    {name : "shirt", price : 500 , quantity : 8},
    {name : "Watch", price : 3680 , quantity : 3},
    {name : "phone", price : 55000 , quantity : 1},
    
];

let cartTotal = 0;
for(const product of cart){

    console.log(product);

    const perProductTotal = product.price * product.quantity;

    cartTotal = cartTotal + perProductTotal;
}

console.log(cartTotal); */





const cart = [

    {name : "laptop", price : 43000 , quantity : 5},
    {name : "router", price : 5000 , quantity : 20},
    {name : "Watch", price : 3680 , quantity : 15},
    {name : "phone", price : 55000 , quantity : 12},
    
];

let cartTotal = 0;

for(const product of cart){

    const perProductTotal = product.price * product.quantity;

    cartTotal = cartTotal + perProductTotal;
}

console.log(cartTotal)