import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {
  mostrar:boolean = true;
  texto:string = "Un poder conlleva una gran responsabilidad";
  autor:string = "Ben parker";

  personajes:string[] = ["Spiderman", "Venom", "Carnage", "Octopus"];

}
