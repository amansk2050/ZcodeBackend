const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidenav');
const sidenavCloseEl = $('.sidenav__close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Open the side nav on click
menuIconEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidenavCloseEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');
});




// =========Amount counter1==========
var valueAmount1 = document.getElementById("amountt1");
let count1 = 0;
function counter1(){
  count1 += 1;
  console.log(valueAmount1.value)
  valueAmount1.value=count1;
}

// =========Amount counter2==========
var valueAmount2 = document.getElementById("amountt2");
let count2 = 0;
function counter2(){
  count2 += 1;
  console.log(valueAmount2.value)
  valueAmount2.value=count2;
}

// =========Amount counter3==========
var valueAmount3 = document.getElementById("amountt3");
let count3 = 0;
function counter3(){
  count3 += 1;
  console.log(valueAmount3.value)
  valueAmount3.value=count3;
}

// =========Show value on submit==========
function showValue() {
  var name = document.getElementById('currentPrice').value;
  var name1 = document.getElementById('availableToken').value;
  var name2 = document.getElementById('ownersToken').value;
  document.getElementById('ans').innerHTML = name;
  document.getElementById('ans1').innerHTML = name1;
  document.getElementById('ans2').innerHTML = name2;
}

//Admin set funciton
function showValue1() {
  var name1 = document.getElementById('availableToken').value;
  document.getElementById('ans1').innerHTML = name1;
}
function showValue2() {
  var name2 = document.getElementById('ownersToken').value;
  document.getElementById('ans2').innerHTML = name2;
}
function showValue3() {
  var name3 = document.getElementById('whitelistedAddress').value;
  document.getElementById('ans3').innerHTML = name3;
}


//Admin set function
function showUpdated1() {
  document.getElementById('update1').innerHTML = `Updated`;
}
function showUpdated2() {
  document.getElementById('update2').innerHTML = `Updated`;
}
function showUpdated3() {
  document.getElementById('update3').innerHTML = `Updated`;
}
function showUpdated4() {
  document.getElementById('update4').innerHTML = `Updated`;
}

//Admin perform
function showUpdated5() {
  document.getElementById('update5').innerHTML = `Updated`;
}
function showUpdated6() {
  document.getElementById('update6').innerHTML = `Updated`;
}
function showUpdated7() {
  document.getElementById('update7').innerHTML = `Updated`;//not used in html
}
function showUpdated8() {
  document.getElementById('update8').innerHTML = `Updated`;
}