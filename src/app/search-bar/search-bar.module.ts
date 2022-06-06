import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchBarRoutingModule} from './search-bar-routing.module';
import {SearchBarComponent} from './search-bar.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  exports: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchBarRoutingModule,
    FormsModule
  ]
})
export class SearchBarModule {
}
