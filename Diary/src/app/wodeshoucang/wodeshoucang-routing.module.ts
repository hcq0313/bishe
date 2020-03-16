import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WodeshoucangPage } from './wodeshoucang.page';

const routes: Routes = [
  {
    path: '',
    component: WodeshoucangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WodeshoucangPageRoutingModule {}
