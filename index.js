var
	carousel = document.querySelector('.carousel'),
	figure = carousel.querySelector('figure'),
	nav = carousel.querySelector('nav'),
	numImages = figure.childElementCount,
	theta =  2 * Math.PI / numImages,
	currImage = 0
;
	
nav.addEventListener('click', onClick, true);

function onClick(e) {
	e.stopPropagation();
	
	var t = e.target;
	if (t.tagName.toUpperCase() != 'BUTTON')
		return;
	
	if (t.classList.contains('next')) {
		currImage++;
	}
	else {
		currImage--;
	}
	
	figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}



document.querySelectorAll('#ite').forEach(element => element.addEventListener('click', () => {
	document.querySelector('#burger').checked= false
 })
);


var navigation = document.querySelector('.navigation')

window.onscroll = () => {
	
	if(this.scrollY > 300) navigation.classList.add('scroll'); else navigation.classList.remove('scroll')
  };

  let burgerNav= document.querySelectorAll('.item-nav')
 let burger=document.getElementById('burger')
  burgerNav.forEach(item => burger.addEventListener('change', function() {
	item.classList.toggle('toggle-burger')
	document.querySelectorAll('#ite').forEach(element => element.addEventListener('click', () => {
		document.querySelector('#burger').checked= false
		item.classList.remove('toggle-burger')
	 })
	);
  }))
 

//   MODAL
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer.classList.toggle("active")
}


