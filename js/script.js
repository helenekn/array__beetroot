"use strict";
//---------task 1---------//

let shoppingList = [
   {
      name: "bread",
      price: 20,
      amount: 2,
      sum: 40,
      isBought: false,
   },
   {
      name: "rice",
      price: 40,
      amount: 1,
      sum: 40,
      isBought: false,
   },
   {
      name: "tomato",
      price: 60,
      amount: 1,
      sum: 60,
      isBought: true,
   },
   {
      name: "cake",
      price: 50,
      amount: 4,
      sum: 200,
      isBought: true,
   },
   {
      name: "pepsi",
      price: 18,
      amount: 3,
      sum: 54,
      isBought: false,
   },
];

let btns = document.querySelectorAll(".button");
let answers = document.querySelectorAll(".answer");
let list = document.querySelector(".list");

// function markPurchase(arr) {
//    arr.forEach((item, i) => {
//       let sign = "";
//       if (arr.isBought) {
//          sign = "+";
//       } else sign = "-";
//    });
// }

shoppingList.forEach((item, i) => {
   let sign = "";
   if (item.isBought) {
      sign = "+";
   } else sign = "-";
   list.innerHTML += `<p>${i + 1}. ${item.name} ${sign}</p>`;
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

//------task 1-------------//

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

function changeIsBought(arr, thing, callback) {
   arr.forEach((el) => {
      if (el.name === thing) {
         el.isBought = true;
         showSoppingList(arr);
      }
   });
}

console.log(changeIsBought(shoppingList, "bread", showSoppingList));
console.log(shoppingList);
