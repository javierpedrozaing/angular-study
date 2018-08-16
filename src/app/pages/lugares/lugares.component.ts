import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  lugares = [
  	{nombre: "Floreria", active: true, cercania: 1, distancia:10, plan: 'pagado' },
  	{nombre: "Pasteleria", active: true, cercania: 2, distancia:20, plan: 'gratuito'},
  	{nombre: "Veterinaria", active: false, cercania: 2, distancia:30, plan: 'pagado'},
  	{nombre: "Papelería", active: true, cercania: 3, distancia:40, plan: 'gratuito'}
  ];
  lat: number = 4.6852534;
  lng: number = -74.0556901;

}

