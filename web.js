let elt = document.getElementById('main');
elt.innerHTML = "<div> numero 1 </div> <div> numero 2 </div> <div> numero 3 </div>";

let firstChild = document.createElement('div');
firstChild.innerHTML = "<div>pipoupipou</div>";

elt.appendChild(firstChild);

elt.replaceChild(document.createElement("section"), firstChild);

const button = document.getElementById('button');
button.addEventListener('click', function() {
	elt.innerHTML = " Mange une crèpe wahou ";
});

const color = document.getElementById('color')
color.addEventListener('click', function(){
	elt.style = colorredk   

})

let objJson = {
	
	Produit: 'serpillere' 
	Marque : Swiffer;
	Taille: 140; 
	Taux absortion: 80%
	Prix : 10€ 
}

