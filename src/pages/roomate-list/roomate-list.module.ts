import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomateListPage } from './roomate-list';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    RoomateListPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomateListPage),
	  DirectivesModule
  ],
	exports:[
		RoomateListPage
	]
})
export class RoomateListPageModule {}
