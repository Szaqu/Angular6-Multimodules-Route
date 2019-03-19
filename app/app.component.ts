import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public routerLinks: Object  = [
    { name: "Options 1", link: "/first"},
    { name: "Options 2", link: "/second"},
    { name: "Options 3", link: "/second/test1"}
  ]


  constructor() {
  }


  ngOnInit() {
  }

}
