import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {TabsPageModule} from "./tabs.module";

@IonicPage({
	name: 'page-tabs',
	segment: 'tabs'
})
@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = 'page-tabs';
	tabItem :any;
	tab1Root: any = 'page-home';
	tab4Root:any='page-property-list';
	tab2Root: any = 'page-my-account';
	tab3Root:string = 'page-roomate';
	myIndex: number;
	homeItem: any;

	constructor(navParams: NavParams,public navCtrl:NavController) {
		// Set the active tab based on the passed index from menu.ts
		this.myIndex = navParams.data.tabIndex || 0;
		this.homeItem = {component: 'page-home' };
		this.tabItem = {component:'page-tabs'};

	}
	openPage(page){
		// @ts-ignore
		this.navCtrl.push(TabsPage);
	}
}
