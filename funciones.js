function mostrarPrecios(){
	var texto = "<ol>";
	var misPlatos = ["Hamburguesa Saludable","Pizza Fit","Carrot Cake","Ensalada de Pollo","Galletas de Avena","Torta de Chocolate Fit","Ensalda con Huevo","Pancakes de Avena","Ensalada de Frutas"];
  var misPrecios = [15,15,10,20,5,12,15,10,10];
	for (var i=0; i< misPlatos.length; i++){

		texto = texto + "<li>" + misPlatos[i]+"     S/."+ misPrecios[i] + "</li>";
	}

	texto = texto + "</ol>";
	document.getElementById("demo").innerHTML = texto;
}



		
