import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
  {
    name: 'inicio',
    path: '/inicio'
  },
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'contact',
    path: '/about'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
