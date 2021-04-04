window.onload = cargarImagenes;
var posActual = 0;
var Misimagenes = new Array(5);
			function cargarImagenes(){
			

					Misimagenes[0] = "imagen/admin.jpg";
					Misimagenes[1] = "imagen/atencion.jpg";
					Misimagenes[2] = "imagen/cocina.jpg";
					Misimagenes[3] = "imagen/delivery.jpg";
					Misimagenes[4] = "imagen/software.jpg";
	
			document.imgSrc.src = Misimagenes[posActual];	
			
			}

			function anterior(){
				if (posActual==0){
				posActual = 4;
				}
				else {
				posActual--;
				}
			document.imgSrc.src = Misimagenes[posActual];	
			}

function siguiente(){
	if (posActual==4){
		posActual = 0;
	}
	else {
		posActual++;
	}
	document.imgSrc.src = Misimagenes[posActual];	
}

			


			