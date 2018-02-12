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
}
}
