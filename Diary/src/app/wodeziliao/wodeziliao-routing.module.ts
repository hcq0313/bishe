import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WodeziliaoPage } from './wodeziliao.page';

const routes: Routes = [
  {
    path: '',
    component: WodeziliaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WodeziliaoPageRoutingModule {}
