"use strict";

let shoppingList = [
   {
      name: "bread",
      price: 20,
      amount: 2,
      isBought: false,
   },
   {
      name: "rice",
      price: 40,
      amount: 1,
      isBought: false,
   },
   {
      name: "tomato",
      price: 60,
      amount: 1,
      isBought: true,
   },
   {
      name: "cake",
      price: 50,
      amount: 4,
      isBought: true,
   },
   {
      name: "pepsi",
      price: 18,
      amount: 3,
      isBought: false,
   },
];

function addSum(arr) {
   arr.forEach((el) => {
      el.sum = el.price * el.amount;
   });
}
addSum(shoppingList);
////---------------------------------------------------////////////
let btns = document.querySelectorAll(".button");
let answers = document.querySelectorAll(".answer");
let list = document.querySelector(".list");

shoppingList.forEach((item, i) => {
   let sign = "";
   if (item.isBought) {
      sign = "+";
   } else sign = "-";
   list.innerHTML += `<p>${i + 1}. ${item.name}  /  ${
      item.amount
   } шт. ${sign}</p>`;
});

showSoppingList(shoppingList);

btns[0].addEventListener("click", outputSortShoppingList);

function outputSortShoppingList() {
   shoppingList.forEach((item, i) => {
      let sign = "";
      if (item.isBought) {
         sign = "+";
      } else sign = "-";
      answers[0].innerHTML += `<p>${i + 1}. ${item.name} ${sign}</p>`;
   });
}

//--------------------task 1----------------------------//

function showSoppingList(arr) {
   let temp = arr.length;
   for (let i = 0; i < temp; i++) {
      if (arr[i].isBought) {
         arr.push(arr.splice(i, 1)[0]);
         i--;
         temp -= 1;
      }
   }
   return arr;
}
console.log(showSoppingList(shoppingList));

function showSoppingList_1(arr) {
   arr.sort((a, b) => a.isBought - b.isBought);
   return arr;
}
console.log(showSoppingList_1(shoppingList));

//--------------------------- task 2 --------------------------//

function changeIsBought(arr, item, callback) {
   arr.forEach((el) => {
      if (el.name === thing) {
         el.isBought = true;
         showSoppingList(arr);
      }
   });
}

console.log(shoppingList);
console.log(changeIsBought(shoppingList, "bread", showSoppingList));

//--------------------------task 1 norma --------------------------//

function removeProduct(arr, item) {
   let newShoppingList = [];
   for (let product of arr) {
      if (product.name !== item) {
         newShoppingList.push(product);
      } else continue;
   }
   return newShoppingList;
}

console.log(removeProduct(shoppingList, "bread"));

//------------------------task 2 norma ------------------------------//

// let shoppingList = [
//    {
//       name: "bread",
//       price: 20,
//       amount: 2,
//       isBought: false,
//    },
//    {
//       name: "rice",
//       price: 40,
//       amount: 1,
//       isBought: false,
//    },
//    {
//       name: "tomato",
//       price: 60,
//       amount: 1,
//       isBought: true,
//    },
//    {
//       name: "cake",
//       price: 50,
//       amount: 3,
//       isBought: true,
//    },
//    {
//       name: "pepsi",
//       price: 18,
//       amount: 3,
//       isBought: false,
//    },
// ];

function addProduct(arr, product) {
   let index = arr.findIndex((item) => item.name === product);
   if (index === -1) {
      arr.push({ name: product, price: 0, amount: 1, isBought: false });
   } else {
      arr[index].amount += 1;
   }
   return arr;
}
console.log(addProduct(shoppingList, "pepsi"));
console.log(addProduct(shoppingList, "orange"));

///--------------------------task 1 max ------------------------------///
// let shoppingList = [
//    {
//       name: "bread",
//       price: 20,
//       amount: 2,
//       isBought: false,
//    },
//    {
//       name: "rice",
//       price: 40,
//       amount: 1,
//       isBought: false,
//    },
//    {
//       name: "tomato",
//       price: 60,
//       amount: 1,
//       isBought: true,
//    },
//    {
//       name: "cake",
//       price: 50,
//       amount: 3,
//       isBought: true,
//    },
//    {
//       name: "pepsi",
//       price: 18,
//       amount: 3,
//       isBought: false,
//    },
// ];
function calculatePurchaseAmount(arr) {
   return arr.reduce(
      (accum, current) => accum + current.price * current.amount,
      0
   );
}
console.log(calculatePurchaseAmount(shoppingList));

//////-----------------------task 2 max ----------------------------////

function calculateUnpurchase(arr) {
   newArr = arr.filter((item) => item.isBought === false);
   return calculatePurchaseAmount(newArr);
}
console.log(calculateUnpurchase(shoppingList));

function sortPurchase(arr) {
   return arr.sort((a, b) => a.price * a.amount - b.price * b.amount);
}
console.log(sortPurchase(shoppingList));

function sortReversePurchase(arr) {
   return arr.sort((a, b) => a.price * a.amount - b.price * b.amount).reverse();
}
console.log(sortReversePurchase(shoppingList));
