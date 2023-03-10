import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reoder',
  templateUrl: './reoder.page.html',
  styleUrls: ['./reoder.page.scss'],
})
export class ReoderPage implements OnInit {

  personas = ['carlos','alan','miguel'];

  constructor() { }

  ngOnInit() {
  }

}
