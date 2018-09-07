import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService{
 constructor(private angularFireAuth: AngularFireAuth){}
    
 // declaración función tipo typeScrip
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then((res)=>{
            alert("usuario logueado con exito");
            console.log(res);
        })
        .catch((err)=>{
            alert("ocurrio un error");
            console.log(err);
        });
    };

    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
        .then((res)=>{
            alert("usuario registrado");
            console.log(res);
        })
        .catch((err)=>{
            alert("ocurrio un error");
            console.log(err);
        });
    };
}