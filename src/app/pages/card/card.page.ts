import { Component, OnInit } from '@angular/core';
interface Tarjeta{
  color:string;
  titulo:string;
  subtitulo:string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  tarjetas:Tarjeta[] = [
    {
      color:"primary",
      titulo:"Introducción a la IoT",
      subtitulo:"Aprender del interner de las cosas"
    },
    {
      color:"secondary",
      titulo:"Aplicaciones Web para I4.0",
      subtitulo:"Diseñar aplicaciones web para la internet 4.0 a traves de Laravel"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
