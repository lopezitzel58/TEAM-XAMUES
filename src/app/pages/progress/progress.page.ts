import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }

  ngOnInit() {
  }

}
