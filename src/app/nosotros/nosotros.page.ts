import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  atras(){
    this.navCtrl.back();
  }

}
