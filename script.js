'use strict';

var celebrity = {
	name: 'jayZ',
	age: 47,
	isFromBrooklyn: true,
	action: function(){
		return this.name + " is " + this.age + " years old !";
	}

}


console.log(celebrity.name);
console.log(celebrity.action())

 //var footer = document.getElementById('main-footer');
// footer.addEventListener('mouseover', function(){
// 	footer.style.backgroundColor = "black";
// });


// var theTitle = document.getElementsByClassName('title');
// theTitle[1].addEventListener('click', function(){
// 	theTitle[1].style.color = "purple";
// });

var button = document.getElementById('button');
var orderedList = document.getElementsByClassName('orderedList');
button.addEventListener('click', function(){
	orderedList[0].style.display = "none";
});
