import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YinsiPage } from './yinsi.page';

const routes: Routes = [
  {
    path: '',
    component: YinsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YinsiPageRoutingModule {}
