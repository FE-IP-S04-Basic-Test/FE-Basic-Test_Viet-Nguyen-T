/* 
* @param {array[{ id: string, quantity: number }]}
* @param {array[{ id: string, quantity: number }]}
* @return {array[{ id: string, quantity: number }]}
* Input: (
 [
   { id: '1', quantity: 2 },
   { id: '2', quantity: 2 },
   { id: '3', quantity: 3 },
   { id: '1', quantity: 3 }
 ],
 [
   { id: '1', quantity: 2 },
   { id: '3', quantity: 2 }
 ]);
* Output:  [{ id: '1', quantity: 7 }, { id: '3', quantity: 5 }]
*/

const input = [
  [
    { id: '1', quantity: 2 },
    { id: '2', quantity: 2 },
    { id: '3', quantity: 3 },
    { id: '1', quantity: 3 },
  ],
  [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 2 },
  ],
];

// let arrtest = []
// for(let i = 0 ; i < input[1].length ; i++) {
//   arrtest = input[0].filter(item => {
//     return input[1][i].id === item.id
//   })
// }

console.log(arrtest);
let output = [
  ...input[0],...input[1]
]


let newArr = []
for(let i = 0; i < output.length ; i++) {
  let item = newArr.find((newArrItem) => {
    return newArrItem.id === output[i].id;
  })
  if(item) {
    item.quantity += output[i].quantity;
  }else {
    newArr.push(output[i]);
  }
}

console.log(newArr);

const mergeArray = (array1,array2) => {

}


