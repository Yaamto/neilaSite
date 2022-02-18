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


// EMAAAAIL

var btn = document.querySelector('.btn-input')

async function sendMail(event){
	event.preventDefault();

	var email = document.getElementById("email").value
	function validEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var result = re.test(email)
		;

		return result
	};

	document.getElementById("email").addEventListener("change", function(){
		document.querySelector('.error').innerHTML =""
	})
	const response = validEmail(email)
	if(response === true){
	btn.innerHTML ="Envoie en cours..."
	}
	toName="Neila"
	var tempParams= {
		from_name:document.getElementById("name").value +' '+ document.getElementById('firstName').value,
		to_name: toName,
		userEmail: email,
		subject: document.getElementById('sujet').value,
		message:document.getElementById('message').value
		
	}
	
	if(response === true) {
	await emailjs.send('service_91aoy7e','template_vgtj517', tempParams)
	.then(function(res){
		
		var notyf = new Notyf();
		notyf.success('Votre message a été envoyé avec succès');
		btn.innerHTML = "Message envoyé"
		console.log("success", res.status)
		console.log(tempParams)
		document.getElementById('contact-form').reset()
		
	}, (error) => console.log(error))

} else (
	document.querySelector('.error').innerHTML = "L'adresse mail n'est pas valide"
)
}








