import {Component} from '@angular/core';
import {IonicPage, Config, NavController, NavParams, ToastController, ModalController} from 'ionic-angular';

import {PropertyService} from '../../providers/property-service-mock';

@IonicPage({
	name: 'page-property-list',
	segment: 'propertylist'
})

@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {

    properties: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    proptype: string;
    from: string;
	lat: number = 42.35663;
	lng: number = -71.11095;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: PropertyService, public toastCtrl: ToastController, public modalCtrl: ModalController, public config: Config) {
		this.findAll();
		this.proptype = this.navParams.get('proptype') || "";
		this.from = this.navParams.get('from') || "";
	}

    openFilterModal() {
		let modal = this.modalCtrl.create('page-property-filter');
    	modal.present();
    }

    openPropertyDetail(property: any) {
			this.navCtrl.push('page-property-detail', {
				'id': property.id
			});
    }

    favorite(property) {
        this.service.favorite(property)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Property added to your favorites',
                    cssClass: 'mytoast',
                    duration: 2000
                });
                toast.present(toast);
            });
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
            .then(data => this.properties = data)
            .catch(error => alert(error));
    }

}
