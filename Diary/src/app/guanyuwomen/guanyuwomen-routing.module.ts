import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuanyuwomenPage } from './guanyuwomen.page';

const routes: Routes = [
  {
    path: '',
    component: GuanyuwomenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuanyuwomenPageRoutingModule {}
