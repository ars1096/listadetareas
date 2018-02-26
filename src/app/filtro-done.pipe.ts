import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDone',
  pure: false
})
export class FiltroDonePipe implements PipeTransform {

  transform(value: any, priority): any {
    if(priority){
      return value.sort(function(a, b){
        if(a.prioridad < b.prioridad){
          return 1;

        }else if (a.prioridad > b.prioridad ){
          return -1;
        }else{
          return 0;
        }

      });
    }else return value;
  }


}
