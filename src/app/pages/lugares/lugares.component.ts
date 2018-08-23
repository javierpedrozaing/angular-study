import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import swal from 'sweetalert2';
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity:0,
        backgroundColor:"green",        
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity:1,
        backgroundColor:"yellow",
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500))
    ])
  ]
})
export class LugaresComponent implements OnInit{

  lat: number = 4.6852534;
  lng: number = -74.0556901;
  state = "inicial";

  lugares = null;

  animar(){
    this.state = (this.state == 'final' ) ? 'inicial' : 'final';
  }
  constructor(private lugaresService: LugaresService){    
  }

  animacionInicia(e){
    console.log("Iniciado");
    console.log(e);
  }

  animacionTermina(e){
    console.log("terminado");
    console.log(e);
  }

  ngOnInit() {
    this.loadData();
  }
  
  loadData(){

    //this.lugares = this.lugaresService.getLugares();

    //* este forma se utiliza cuando se hace la petición por medio de sockets
    // this.lugaresService.getLugares()
    //   .valueChanges().subscribe((lugares) => {
        
    //     this.lugares = lugares;
    //   });

    //* este forma se utiliza cuando se hace la petición por HTTP
    this.lugaresService.getLugares()
    .valueChanges().subscribe(lugares =>{
      this.lugares = lugares;
      //var self = this;

      //* utilizando callback  function normal
      // self.lugares = Object.keys(self.lugares).map(function(key){        
      //   return self.lugares[key]
      // });  

      //* utilizando arrow function
      this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
    }, error => {
      swal({
        title: 'Error!',
        text: 'Ocurrio un error, intenta mas tarde',
        type: 'error',
        confirmButtonText: 'Ok'
      })
    });
    
    
  }
}

