import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopDealPageRoutingModule } from './top-deal-routing.module';

import { TopDealPage } from './top-deal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopDealPageRoutingModule
  ],
  declarations: [TopDealPage]
})
export class TopDealPageModule {}
