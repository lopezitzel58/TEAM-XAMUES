import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
  componentes:Componente[] = [
    {
      icon:"beer-outline",
      name:"ACTION SHEET PAGE",
      redirectTo:"/action-sheet"
    },
    {
      icon:"nutrition-outline",
      name:"ALERT SHEET PAGE",
      redirectTo:"/alert"
    },
    {
      icon:"chevron-forward-outline",
      name:"BREADCRUMS PAGE",
      redirectTo:"/breadcrum"
    },
    {
      icon:"hammer-outline",
      name:"TOOLBAR PAGE",
      redirectTo:"/toolbar"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
