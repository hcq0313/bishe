import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiguangshuoPage } from './shiguangshuo.page';

const routes: Routes = [
  {
    path: '',
    component: ShiguangshuoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiguangshuoPageRoutingModule {}
