import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent implements OnInit{

  lat: number = 4.6852534;
  lng: number = -74.0556901;

  lugares = null;

  constructor(private lugaresService: LugaresService){    
  }

  ngOnInit() {
    this.loadData();
  }
  
  loadData(){

    this.lugares = this.lugaresService.getLugares();

  }
}

