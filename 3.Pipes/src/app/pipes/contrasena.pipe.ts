import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active:true): any {
      if (active) {
        let name = value.split("");
        for( let i in name) {
          name[i] = name[i].replace(name[i],'*');
        }
        return name.join("");
      } else {
        return value;
      }
    
  }

}
