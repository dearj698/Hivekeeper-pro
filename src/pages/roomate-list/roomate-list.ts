import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomateListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name: 'page-roomate',
	segment: 'page-roomate',
	priority: 'high'
})
@Component({
  selector: 'page-roomate',
  templateUrl: 'roomate-list.html',
})
export class RoomateListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomateListPage');
  }

}
