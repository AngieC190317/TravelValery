import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.page.html',
  styleUrls: ['./contac.page.scss'],
})
export class ContacPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  atras() {
    this.navCtrl.back();
  }

}
