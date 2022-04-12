/*=============== TOGGLE BUY SECTION COUNTER ===============*/
var checkbox1 = document.getElementById("radio1");
var checkbox2 = document.getElementById("radio2");
var checkbox3 = document.getElementById("radio3");
var productCart1 = document.getElementById("product__card_1");
var productCart2 = document.getElementById("product__card_2");
var productCart3 = document.getElementById("product__card_3");

productCart1.addEventListener("click", () => {
  checkbox1.checked = true;
  productCart1.classList.add("product__card_border");
  productCart2.classList.remove("product__card_border");
  productCart3.classList.remove("product__card_border");
});

productCart2.addEventListener("click", () => {
  checkbox2.checked = true;
  productCart2.classList.add("product__card_border");
  productCart1.classList.remove("product__card_border");
  productCart3.classList.remove("product__card_border");
});

productCart3.addEventListener("click", () => {
  checkbox3.checked = true;
  productCart3.classList.add("product__card_border");
  productCart1.classList.remove("product__card_border");
  productCart2.classList.remove("product__card_border");
});

/*=============== BUY SECTION RADIO BUTTON ===============*/

/*=============== SHOP SECTION COUNTER ===============*/
let counter = document.getElementById("count");

let count = 0;
counter.innerHTML = `${count}`;

function plus() {
  if (count < 10) {
    // console.log("value of count ", count);
    count += 1;
    counter.innerHTML = `${count}`;
  }
}
function minus() {
  if (count > 0) {
    count -= 1;
    counter.innerHTML = `${count}`;
  }
}