import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
model = {
  user: "Pipo",
  items: [
    {action: "comprar flores", done: false},
    {action: "Buscar zapatos", done: true},
    {action: "Recoger entradas", done: false},
    {action: "Llamar a juan", done: false},
  ]
};
  TnIncompletas(){
    let count = 0;
    this.model.items.forEach((item, index)=>
      !item.done ? count++ : true);
      return count;
  }
}
