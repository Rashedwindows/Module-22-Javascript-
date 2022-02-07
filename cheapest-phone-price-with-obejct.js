/* const phones =[

    {name : "samsung s20 ultra", price: 45000, storage : 256, camera : 64},
    {name : "mi note 11pro", price: 32000, storage : 128, camera : 64},
    {name : "opp f10", price: 28000, storage : 64, camera : 48},
    {name : "realme6", price: 22000, storage : 128, camera : 64},
    {name : "Iphone 12pro", price: 120000, storage : 512, camera : 108},
    {name : "samsung guru music 2", price: 2000, storage : 8, camera : 13},
]

let cheapest = phones[0];


for(const phone of phones){

    // compare price only

    if(phone.price < cheapest.price){

        cheapest = phone;
    }
}

console.log(cheapest); */


 const phones =[

    {name : "samsung s20 ultra", price: 45000, storage : 256, camera : 64},
    {name : "mi note 11pro", price: 32000, storage : 128, camera : 64},
    {name : "opp f10", price: 28000, storage : 64, camera : 48},
    {name : "realme6", price: 22000, storage : 128, camera : 64},
    {name : "Iphone 12pro", price: 120000, storage : 512, camera : 108},
    {name : "samsung guru music 2", price: 2000, storage : 8, camera : 13},
]


// let cheapest=phones[0];

// for(const phone of phones){

//     if (phone.price < cheapest.price){

//         cheapest = phone;
//     }
// }

// console.log(cheapest);



let cheapest = phones[0];

for(const phone of phones){

    if(phone.price < cheapest.price){

        cheapest = phone;
    }
}

console.log(cheapest)