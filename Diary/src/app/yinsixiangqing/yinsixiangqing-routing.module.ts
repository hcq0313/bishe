import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YinsixiangqingPage } from './yinsixiangqing.page';

const routes: Routes = [
  {
    path: '',
    component: YinsixiangqingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YinsixiangqingPageRoutingModule {}
