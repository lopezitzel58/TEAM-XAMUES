import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor() { }

canDismiss = false;

  presentingElement:any;

  ngOnInit() {
    this.presentingElement=document.querySelector('.ion-page');
  }

  
  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  } 
}
