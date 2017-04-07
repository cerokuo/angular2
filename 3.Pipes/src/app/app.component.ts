import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Luis";
  name2 = "luIs rodolfo langOStino";

  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salary = 1234.5;

  heroe = {
    name: 'Rasputin',
    key: 'Colossus',
    addres:{
      Street: 'First St.',
      number: 19
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('Data just arrived');
    }, 3500)
  });


  today = new Date();

  video = "_WNVEtWEgZE";

  activar:boolean = true;


}
