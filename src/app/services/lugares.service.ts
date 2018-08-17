import {Injectable} from '@angular/core';


@Injectable()
export class LugaresService{

   lugares = [
  	{id: 1, nombre: "Floreria", active: true, cercania: 1, distancia:10, plan: "pagado",  description: "Descripción de mi negocio"},
  	{id: 2, nombre: "Pasteleria", active: true, cercania: 2, distancia:20, plan: "gratuito", description: "Descripción de mi negocio"},
  	{id: 3, nombre: "Veterinaria", active: false, cercania: 2, distancia:30, plan: 'pagado', description: "Descripción de mi negocio"},
  	{id: 4, nombre: "Papelería", active: true, cercania: 3, distancia:40, plan: 'gratuito', description: "Descripción de mi negocio"}
  ];

  public getLugares(){
  	return this.lugares;
  }

  public buscarLugar(id){
  	// filter simpere nos va a devolver un arreglo
  	//return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null
  	
  	//return this.lugares.find(({id}) => id == this.id) || null

  	return this.lugares.find( lugar => lugar.id == id) || null;
  	
  }

  
}
