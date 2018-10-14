import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, PopoverController } from 'ionic-angular';

import { PropertyService } from '../../providers/property-service-mock';


@IonicPage({
	name: 'page-home',
	segment: 'home',
	priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  properties: Array<any>;
  searchKey: string = "";

	items = [
		{
			name: 'one',
			slides: [{
				title: 'Dream\'s Adventure',
				imageUrl: 'assets/img/4.jpg',
				songs: 2,
				private: false
			},
				{
					title: 'For the Weekend',
					imageUrl: 'assets/img/2.jpg',
					songs: 4,
					private: false
				},
				{
					title: './Family Time',
					imageUrl: 'assets/img/3.jpg',
					songs: 5,
					private: true
				},
				{
					title: 'My Trip',
					imageUrl: 'assets/img/1.jpg',
					songs: 12,
					private: true
				}]
		},
	];

	constructor(public navCtrl: NavController, public menuCtrl: MenuController, public popoverCtrl: PopoverController, public service: PropertyService) {
		this.menuCtrl.swipeEnable(true, 'authenticated');
		this.menuCtrl.enable(true);
		this.findAll();
  }

  openPropertyListPage(proptype) {
  	// console.log(proptype);
		this.navCtrl.push('page-property-list', proptype);
  }

	openPropertyDetail(property: any) {
		this.navCtrl.push('page-property-detail', {
			'id': property.id
		});
	}

  openSettingsPage() {
		this.navCtrl.push('page-settings');
  }

	onInput(event) {
	    this.service.findByName(this.searchKey)
	        .then(data => {
	            this.properties = data;
	        })
	        .catch(error => alert(JSON.stringify(error)));
	}

	onCancel(event) {
	    this.findAll();
	}

	findAll() {
	    this.service.findAll()
	        .then(data => {
					this.properties = data;
	        		console.log(data);
	        }
			)
	        .catch(error => alert(error));
	}

  presentNotifications(myEvent) {
    console.log(myEvent);
		let popover = this.popoverCtrl.create('page-notifications');
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillEnter() {
      // this.navCtrl.canSwipeBack();
  }
	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}
}
