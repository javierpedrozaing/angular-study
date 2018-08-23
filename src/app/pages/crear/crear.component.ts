import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent{
  lugar: any = {};
  constructor(private lugaresService: LugaresService) { 
  
  }

  guardarLugar(){
  	var direccion = this.lugar.direccion + "," + this.lugar.pais + "," + this.lugar.ciudad;
  	this.lugaresService.getPosition(direccion)
  	.subscribe((result) => {  			
  			this.lugar.lat= result.json().results[0].geometry.location.lat;
  			this.lugar.lng= result.json().results[0].geometry.location.lng;
  			this.lugar.id = Date.now();
  			this.lugaresService.guardarLugar(this.lugar);
  			swal({
					title: 'Bien!',
					text: 'Se creo un nuevo lugar',
					type: 'success',
					confirmButtonText: 'Ok'
				})
  			this.lugar = {}; //limpiamos el formulario
  	});
  
  }

}
