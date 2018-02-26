import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-callbackhell',
  template: `
    <input type="text" class="form-control"
           (keyup)="tecla($event)"
           placeholder="busca ...">
  `
})
export class CallbackhellComponent implements OnInit {
  private flickerApi = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
  private text: string ='';
  constructor() { }

  ngOnInit() {
  }
 t:any;
  debounce(){
   if (this.t) window.clearTimeout(this.t);
   this.t= window.setTimeout(()=> {this.liveSearch()},1000)
  }

  respuesta(data){
    console.log("respuesta de Flickr",data);
  }

  tecla(e){
    this.text= e.target.value;
    if (this.text.length< 4) return;
    this.debounce();
  }

  liveSearch(){
    console.log("texto: ",this.text);
    $.getJSON(this.flickerApi,{
      tags: this.text,
      tagmode: "all",
      format: "json"
    },this.respuesta)
  }
}
