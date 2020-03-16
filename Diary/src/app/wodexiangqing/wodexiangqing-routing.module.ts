import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WodexiangqingPage } from './wodexiangqing.page';

const routes: Routes = [
  {
    path: '',
    component: WodexiangqingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WodexiangqingPageRoutingModule {}
