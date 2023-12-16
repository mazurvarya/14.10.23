// let name = "Barbara"
// console.log(name);

// var name1 = "Barbara var"
// console.log(name1);

// const name_const = "Barbara const"
// console.log(name_const);

//     if (1==1){
//  } else {

//  }

//  for (let i = 0; i < 10; i++) {
//     console.log(i); 
//  }

//  let a = 10
//  while (a > 0) {
//     console.log(a);
//     a--;
//  }

// function Funcname(params) {
//     let Letname = "let";
//     var Varname = "var";

//     console.log(Letname, Varname);
// }
// Funcname();

let title = document.getElementsByClassName("header-title");
console.log("все элементы с тэгом h1", title);

let title2 = document.getElementsByTagName("h2")
console.log('все элементы с тэгом h2', title2)

let switchBtn = document.getElementById("switch")
console.log("переключатель", switchBtn)

let navigation = document.querySelectorAll(".navigation-menu h3")
console.log("navigation")

let navitem = document.querySelector(".navigation-menu h3")
console.log(navitem)

navitem.innerHTML = "Новый текст"
navitem.style.color = "black"
navitem.style.borderBottom = "2px solid black"