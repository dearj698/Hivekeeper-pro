import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitialPage } from './initial';
import { DirectivesModule } from "../../directives/directives.module";
@NgModule({
	declarations: [
		InitialPage
	],
	imports: [
		IonicPageModule.forChild(InitialPage),
		DirectivesModule
	],
	exports: [
		InitialPage
	]
})

export class InitialPageModule { }
