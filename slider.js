const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const container = document.querySelector('.container');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const blockArr = [block1, block2, block3];
let left = 0
let right = container.offsetWidth;
let myInterval, i;

function nextItem(){
	for(i = 0; i < blockArr.length; i++){
		blockArr[i].style.left = right + "px";
	}
	myInterval = setInterval(moveLeft, 1);
}

function moveLeft(){
	left--;
	right--;
	blockArr[0].style.left = left + "px";
	blockArr[1].style.left = right + "px";

	if(blockArr[0].offsetLeft == -container.offsetWidth){
		clearInterval(myInterval)
		left = 0;
		right = container.offsetWidth;
		blockArr[0].style.left = container.offsetWidth+"px";
		let item1 = blockArr.shift();
		blockArr.push(item1);
		console.log(blockArr)
	}	
}

function previousItem(){
	for(i = 0; i < blockArr.length; i++){
		blockArr[i].style.left = -right + "px";
	}
	myInterval = setInterval(moveRight, 1);
}
function moveRight(){
	left++;
	right--;	
	
	blockArr[0].style.left = left + "px";
	blockArr[2].style.left = -right + "px";
	
	if(blockArr[0].offsetLeft == container.offsetWidth){
		clearInterval(myInterval)
		left = 0;
		right = container.offsetWidth;
		blockArr[0].style.left = -container.offsetWidth+"px";
		let item1 = blockArr.pop();
		blockArr.unshift(item1);
		console.log(blockArr)
	}
}
next.addEventListener('click', nextItem);
previous.addEventListener('click', previousItem);






