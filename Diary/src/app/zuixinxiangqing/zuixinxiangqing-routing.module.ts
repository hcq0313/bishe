import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZuixinxiangqingPage } from './zuixinxiangqing.page';

const routes: Routes = [
  {
    path: '',
    component: ZuixinxiangqingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZuixinxiangqingPageRoutingModule {}
