import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { AgmCoreModule } from '@agm/core';

import { PropertyListPage } from './property-list';

@NgModule({
	declarations: [
		PropertyListPage
	],
	imports: [
		IonicPageModule.forChild(PropertyListPage),
		PipesModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
		})
	],
	exports: [
		PropertyListPage
	]
})

export class PropertyListPageModule { }
