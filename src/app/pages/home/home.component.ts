import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nombre = "";
  apellido = "";
  listo = false;
  

  constructor(){
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000);
	
  }

  // clickButton(){
  // 	alert("click en boton");
  // }


}

