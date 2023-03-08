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
      icon:"caret-forward-outline",
      name:"ACCORDION SHEET PAGE",
      redirectTo:"/accordion"
    },
    {
      icon:"chatbubble-ellipses-outline",
      name:"BADGE SHEET PAGE",
      redirectTo:"/badge"
    },
    {
      icon:"cloud-upload-outline",
      name:"BUTTON SHEET PAGE",
      redirectTo:"/button"
    },
    {
      icon:"chevron-forward-outline",
      name:"BREADCRUM SHEET PAGE",
      redirectTo:"/breadcrum"
    },
    {
      icon:"card-outline",
      name:"CARD SHEET PAGE",
      redirectTo:"/card"
    },
    {
      icon:"checkmark-done-outline",
      name:"CHECKBOX SHEET PAGE",
      redirectTo:"/checkbox"
    },
    {
      icon:"bug-outline",
      name:"ICONS SHEET PAGE",
      redirectTo:"/icons"
    },
    {
      icon:"bonfire-outline",
      name:"CONTENT SHEET PAGE",
      redirectTo:"/contens"
    },
     {
      icon:"hammer-outline",
      name:"TOOLBAR SHEET PAGE",
      redirectTo:"/toolbar"
    },
    {
      icon:"hammer-outline",
      name:"FLOATING",
      redirectTo:"/floating"
    }
    ,
    {
      icon:"hammer-outline",
      name:"CHIP",
      redirectTo:"/chip"
    }
    ,
    {
      icon:"hammer-outline",
      name:"INFINITE",
      redirectTo:"/infinite"
    }
    ,
    {
      icon:"hammer-outline",
      name:"INPUT",
      redirectTo:"/input"
    }
    ,
    {
      icon:"hammer-outline",
      name:"LIST",
      redirectTo:"/list"
    }
    ,
    {
      icon:"hammer-outline",
      name:"ITEM",
      redirectTo:"/item"
    }
    ,
    {
      icon:"hammer-outline",
      name:"GRID",
      redirectTo:"/grid"
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
