import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeiriyijuPage } from './meiriyiju.page';

const routes: Routes = [
  {
    path: '',
    component: MeiriyijuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeiriyijuPageRoutingModule {}
