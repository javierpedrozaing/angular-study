import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro:any = {};
  constructor(private authService: AuthService) {
    

  }


  ngOnInit() {
  }

  registrar(){
    this.authService.registro(this.registro.email, this.registro.password);
  }

}
