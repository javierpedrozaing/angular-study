import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home'
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'testApp';
  a = 3;
  b= 5;
  nombre = "";
  apellido = "";
  listo = false;
  

  constructor(private route: ActivatedRoute){
  	
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000);
	
  }

  clickButton(){
  	alert("click en boton");
  }


}

