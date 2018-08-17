import {Injectable} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import {Http} from "@angular/http";

@Injectable()
export class LugaresService{
  constructor(private afDB: AngularFireDatabase, private http: Http) {}
  
   
  public getLugares(){
  	//return this.lugares;
    return  this.afDB.list('lugares/');
  }

  public buscarLugar(id){
  	// filter simpere nos va a devolver un arreglo
  	//return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null
  	
  	//return this.lugares.find(({id}) => id == this.id) || null

  	//return this.lugares.find( lugar => lugar.id == id) || null;
    
    return this.afDB.collection('lugares/'+id);
  	
  }

    public guardarLugar(lugar){      
      this.afDB.database.ref('lugares/'+ lugar.id).set(lugar);
      alert("Negocio guardado");
    }

  public getPosition(direccion){
    return this.http.get("http://maps.google.com/maps/api/geocode/json?address=" + direccion);
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+ id);
  } 

  public updateLugar(lugar){
    console.log(lugar);
    alert("Negocio Actualizado");
    //this.afDB.database.ref('lugares/'+ lugar.id).set(lugar);
  }

  
}
