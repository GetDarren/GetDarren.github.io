var myHeading = document.querySelector('h1');
myHeading.textContent = 'Whatup man';
var myVariable = "Bob";
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Not my favorite!');
}
function multiply(num1,num2) {
    var result = num1*num2;
    return result;
}
// document.querySelector("html").onclick = function(){
//     alert("OH, STOP POKING ME!")
// }
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/WechatIMG9.jpeg') {
        myImage.setAttribute('src','images/WechatIMG10.jpeg');
    } else {
        myImage.setAttribute('src','images/WechatIMG9.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Darren is cool,' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Darren is cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}