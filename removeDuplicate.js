// const names =["abul","babul","cabul","jabul","mokbul","abul","pitbul","babul","bulbul","jabul","fabul","pitbul","chulbul"];

// function removeDuplicate(names){

//     const unique = [];

//     // for(let i = 0; i< names.length; i++){
//     //     const element = names[i];
//     //     console.log(element)
//     // }

//     for(const element of names){

//         // console.log(element);

//         if(unique.indexOf(element) == -1){

//             unique.push(element);
//         }
//     }
        
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);

// console.log(uniqueNames)








// var fruits =["apple","mango","lichu","mango","pineapple","grape","apple","guava","lichu","banana","palm","pineapple"];



// function removeDuplicateFruits(fruits){

//     var unique = [];

//     for (var element of fruits){

//         if(unique.indexOf(element) == -1){

//             unique.push(element);
//         }
//     }

//     return unique;
// }

// var uniqueNames = removeDuplicateFruits(fruits);

// console.log(uniqueNames);









const biriyaniKhor = ["Naeem","Sagor","Real","Naeem","Shofik","Sabbir","Sagor","Kamrul","Real","Mamun","Shawon"];

function removeDuplicateBiriyaniKhor(biriyaniKhor){

    const unique = [];
    for(const element of biriyaniKhor){
        
        if(unique.indexOf(element) == -1){
            unique.push(element);
            
        }
    }
    return unique;
}

const singleNames = removeDuplicateBiriyaniKhor(biriyaniKhor);

console.log(singleNames);