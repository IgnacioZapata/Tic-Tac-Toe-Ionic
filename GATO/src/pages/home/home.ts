import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  contador: number = 1;
  mensajes = [["","",""],
              ["","",""],
              ["","",""]];

  valor (x,y){
  if(this.contador%2 == 0){
    if(this.mensajes[x][y] == "")
    {
      this.mensajes[x][y] = 'X';
      this.contador+=1;
      this.ganador();
    }
  }else{
    if(this.mensajes[x][y] == "")
    {
      this.mensajes[x][y] = 'O';
      this.contador+=1;
      this.ganador();
    }
  }
 }

 ganador (){
  if((this.mensajes[0][0]==this.mensajes[1][1]) && (this.mensajes[0][0]==this.mensajes[2][2]) 
  && (this.mensajes[0][0]!="")) {
    if(this.mensajes[0][0]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[0][0]==this.mensajes[1][0]) && (this.mensajes[0][0]==this.mensajes[2][0])
  && (this.mensajes[0][0]!="")){
    if(this.mensajes[0][0]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[0][0]==this.mensajes[0][1]) && (this.mensajes[0][0]==this.mensajes[0][2])
  && (this.mensajes[0][0]!="")){
    if(this.mensajes[0][0]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[0][2]==this.mensajes[1][1]) && (this.mensajes[0][2]==this.mensajes[2][0])
  && (this.mensajes[0][2]!="")){
    if(this.mensajes[0][2]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[0][2]==this.mensajes[1][2]) && (this.mensajes[0][2]==this.mensajes[2][2])
  && (this.mensajes[0][2]!="")){
    if(this.mensajes[0][2]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[1][0]==this.mensajes[1][1]) && (this.mensajes[1][0]==this.mensajes[1][2])
  && (this.mensajes[1][0]!="")){
    if(this.mensajes[1][0]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[2][0]==this.mensajes[2][1]) && (this.mensajes[2][0]==this.mensajes[2][2])
  && (this.mensajes[2][0]!="")){
    if(this.mensajes[2][0]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }else if ((this.mensajes[0][1]==this.mensajes[1][1]) && (this.mensajes[0][1]==this.mensajes[2][1])
  && (this.mensajes[0][1]!="")){
    if(this.mensajes[0][1]=="X"){
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR X GANÓ!',
        subTitle: 'JUGADOR O MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }else {
      const alert = this.alertCtrl.create({
        title: 'JUEGO TERMINADO JUGADOR O GANÓ!',
        subTitle: 'JUGADOR X MALDITO LOOSER!',
        buttons: [{
          text: 'Limpiar',
          handler: () => {
            this.juegoNuevo();
            console.log ('juegoNuevo')
          }
        }]
      });
      alert.present();
     }
  }
}

juegoNuevo (){
   for (let i = 0; i < 3; i++) {
     for (let j = 0; j < 3; j++) {
       this.mensajes[i][j]="";
     }     
   }
}
}
