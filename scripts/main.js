let myImage=document.querySelector('img');

myImage.onclick= function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='images/appa.jpg'){
		myImage.setAttribute('src','images/appa2.jpg');
	}else{
		myImage.setAttribute('src','images/appa.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Appa is cool, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Appa is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}