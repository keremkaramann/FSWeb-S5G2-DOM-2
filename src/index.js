import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector(".nav-container h1").addEventListener("click", (e) => {
  alert("Merhaba Kullanıcı!");
});

const navItems = document.querySelectorAll(".nav a");

navItems.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    item.style.backgroundColor = "lightblue";
    item.style.padding = "1rem";
  });
  item.addEventListener("mouseout", (e) => {
    item.style.backgroundColor = "white";
    item.style.padding = "0px";
  });
});

const double = document.querySelector(".intro p");
double.addEventListener("dblclick", (e) => {
  double.style.fontSize = "3rem";
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.remove();
  });
});

const desti = document.querySelectorAll(".destination");

desti.forEach((dest) => {
  dest.addEventListener("wheel", (e) => {
    dest.style.backgroundColor = "aquamarine";
    dest.style.fontWeight = "bold";
  });
});

const all = document.window;
console.log(all);
