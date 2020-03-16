import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YijianPage } from './yijian.page';

const routes: Routes = [
  {
    path: '',
    component: YijianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YijianPageRoutingModule {}
