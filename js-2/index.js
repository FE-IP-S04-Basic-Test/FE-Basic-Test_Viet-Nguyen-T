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

const mergeArray = (array1, array2) => {
  let arrAfter = [];
  array1.forEach((item) => {
    let find = array2.find((item2) => {
      return item.id === item2.id;
    });

    if (!find) {
      array1 = array1.filter((item2) => {
        return item2.id !== item.id;
      });
    }
  });
  array2.forEach((item) => {
    let find = array1.find((item2) => {
      return item.id === item2.id;
    });

    if (!find) {
      array2 = array2.filter((item2) => {
        return item2.id !== item.id;
      });
    }
  });
  arrAfter = [...array1, ...array2];
  let newArr = [];
  for (let i = 0; i < arrAfter.length; i++) {
    let item = newArr.find((newArrItem) => {
      return newArrItem.id === arrAfter[i].id;
    });
    if (item) {
      item.quantity += arrAfter[i].quantity;
    } else {
      newArr.push(arrAfter[i]);
    }
  }
  return newArr;
};

console.log(mergeArray(input[1], input[0]));
