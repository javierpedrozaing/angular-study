import {Injectable} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import {Http, Headers} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LugaresService{
  constructor(private afDB: AngularFireDatabase, private http: Http) {}
  
  API_ENDPOINT = "https://testapp-4425b.firebaseio.com";
  public getLugares(){
    //return this.lugares;
    //* obteniendo datos por sockets
    return  this.afDB.list('lugares/');


    //* obteniendo datos por http
    //return this.http.get(this.API_ENDPOINT+'/lugares.json');
  }

  // public buscarLugar(id){
  // 	// filter simpere nos va a devolver un arreglo
  // 	//return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null
  	
  // 	//return this.lugares.find(({id}) => id == this.id) || null

  // 	//return this.lugares.find( lugar => lugar.id == id) || null;
    
  //   return this.afDB.collection('lugares/'+id);
  	
  // }

    public guardarLugar(lugar){      
      this.afDB.database.ref('lugares/'+ lugar.id).set(lugar); // guardando información por sockets


      //* guardando información por http
      // const headers = new Headers({"Content-Type": "application/json"});
      // return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers: headers}); 
      
    }

  public getPosition(direccion){
    return this.http.get("http://maps.google.com/maps/api/geocode/json?address=" + direccion);
  }

  public getLugar(id){
    return this.afDB.object('lugares/'+ id);
  } 

  public updateLugar(lugar){
    console.log(lugar);
   return  this.afDB.database.ref('lugares/'+ lugar.id).set(lugar);
    
    //this.afDB.database.ref('lugares/'+ lugar.id).set(lugar);
  }

  
}
