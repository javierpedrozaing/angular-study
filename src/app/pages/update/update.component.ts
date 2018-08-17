import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{
  lugar: any = {};
  id: any = null;
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) { 
  	   this.id = this.route.snapshot.params['id'];

  	   this.lugaresService.getLugar(this.id)
  	   	.valueChanges().subscribe((lugar) => {
        
        	this.lugar = lugar;
      });
  }

  updateLugar(){
	this.lugaresService.updateLugar(this.lugar);

  }


  guardarLugar(){
  	var direccion = this.lugar.direccion + "," + this.lugar.pais + "," + this.lugar.ciudad;
  	this.lugaresService.getPosition(direccion)
  	.subscribe((result) => {  			
  			this.lugar.lat= result.json().results[0].geometry.location.lat;
  			this.lugar.lng= result.json().results[0].geometry.location.lng;
  			this.lugar.id = Date.now();
  			this.lugaresService.guardarLugar(this.lugar);  		
  			this.lugar = {}; //limpiamos el formulario
  	});
  
  }

}
