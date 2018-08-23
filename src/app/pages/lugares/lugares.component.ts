import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service';
import swal from 'sweetalert2';

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

