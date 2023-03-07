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
    }, {
      icon:"hammer-outline",
      name:"TOOLBAR SHEET PAGE",
      redirectTo:"/toolbar"
<<<<<<< Updated upstream
    }
=======
    },
    {
      icon:"radio-button-off-outline",
      name:"RADIO PAGE",
      redirectTo:"/radio"
    },

    {
      icon:"grid-outline",
      name:"MENU PAGE ",
      redirectTo:"/menu"
    },

    {
      icon:"images-outline",
      name:"MEDIA PAGE ",
      redirectTo:"/media"
    },

    {
      icon:"flash-outline",
      name:"MODAL PAGE ",
      redirectTo:"/modal"
    },

    
    {
      icon:"help-outline",
      name:"POPOVER PAGE ",
      redirectTo:"/popover"
    },

    {
      icon:"battery-half-outline",
      name:"PROGRESS PAGE",
      redirectTo:"/progress"
    },

    {
      icon:"notifications-circle-outline",
      name:"SELECT PAGE ",
      redirectTo:"/select"
    },
>>>>>>> Stashed changes

  ];
  constructor() { }

  ngOnInit() {
  }

}
