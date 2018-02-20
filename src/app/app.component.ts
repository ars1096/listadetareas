import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha = new Date();
  model = {
    user: "Juan",
    items: [
      {action: "Comprar Flores", done: false, prioridad: 4},
      {action: "Buscar Zapatos", done: true, prioridad: 2},
      {action: "Recoger entradas", done: false, prioridad: 7},
      {action: "Llamar a Juan", done: false, prioridad: 3}
    ]
  };

 // constructor(){
   // this.ordenaTareas();
  //}

  TnIncompletas(){
    let count = 0;
    this.model.items.forEach((item,index)=>
      !item.done ? count++ : true);
    return count;
  }

  addItem(tarea){
    this.model.items.push({action: tarea, done: false, prioridad: 5});
    //this.ordenaTareas();
  }

  nuevaPrioridad(e,i){
    console.log(e,i);
    this.model.items[i].prioridad = e.prioridad;
  }

 //ordenaTareas(){//
 //  this.model.items.sort((a:any, b:any)=>{
 //    if (a.action.toLowerCase() < b.action.toLowerCase()){
 //      return -1;
 //    } else if (a.action.toLowerCase() > b.action.toLowerCase()) {
 //      return 1;
 //    } else return 0;
 //  });
 //}
}
