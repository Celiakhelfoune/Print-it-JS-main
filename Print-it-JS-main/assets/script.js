const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  /*les fléches */
  const flecheGauche = document.querySelector(".arrow_left");
  const flechDroite = document.querySelector(".arrow_right");
  
  /* Génération dynamique des dots */
  const dots = document.getElementsByClassName("dots");
  for(i = 0; i < slides.length; i++) {
	  var dot = document.createElement('span');
	  if (i == 0) {
		  dot.classList.add("dot", "dot_selected");
	  } else {
		  dot.classList.add("dot");
	  }
	  dots[0].appendChild(dot);
  }
  
  /* carrousel image et texte*/
  let currentImagelndex = 0;
  const dotsList = document.querySelectorAll('.dot');
  function updatelmageAndTagline() {
	  const images = document.getElementsByClassName("banner-img");
	  const tagline = document.querySelector("p");
	  images[0].src = "./assets/images/slideshow/" + slides[currentImagelndex].image;
	  tagline.innerHTML = slides[currentImagelndex].tagLine;
	  dotsList.forEach((dot)=> {
		  dot.classList.remove("dot_selected");
		})
	  dotsList[currentImagelndex].classList.add('dot_selected');
  }
  
  flecheGauche.addEventListener("click", () => {
	currentImagelndex--;
	if (currentImagelndex < 0) {
	  currentImagelndex = slides.length - 1;
	}
	updatelmageAndTagline();
	
  });
  flechDroite.addEventListener("click", () => {
	currentImagelndex++;
	if (currentImagelndex >= slides.length) {
	  currentImagelndex = 0;
	}
	updatelmageAndTagline();
	
  });
  