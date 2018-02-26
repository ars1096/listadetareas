import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
declare var $:any;

@Component({
  selector: 'app-reactive',
  template: `
    <input type="text" class="form-control"
           id="search"
           placeholder="busca ...">
  `
})
export class ReactiveComponent implements OnInit {
  private flickerApi = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  constructor() {
    console.log(new Observable())
  }

  ngOnInit() {
    var keyups = Observable.fromEvent($("#search"),'keyup')
      .map((e:any)=>e.target.value)
      .filter(text => text.length > 3)
      .debounceTime(1000)
      .distinctUntilChanged()
      .flatMap(searchTerm =>{
        let promesa = $.getJSON(this.flickerApi,{
          tags: searchTerm,
          tagmode: "all",
          format: "json"
        });
        let observable = Observable.fromPromise(promesa);
        return observable;
      });

    keyups.subscribe(
      (data:any) => console.log(data),
      (error:any)=> console.log(error),
      ()=> console.log("completo")
    )
  }

}
