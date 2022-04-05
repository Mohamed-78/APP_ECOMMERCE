import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopDealPage } from './top-deal.page';

const routes: Routes = [
  {
    path: '',
    component: TopDealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopDealPageRoutingModule {}
