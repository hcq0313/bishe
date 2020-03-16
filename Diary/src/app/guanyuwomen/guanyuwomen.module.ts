import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuanyuwomenPageRoutingModule } from './guanyuwomen-routing.module';

import { GuanyuwomenPage } from './guanyuwomen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuanyuwomenPageRoutingModule
  ],
  declarations: [GuanyuwomenPage]
})
export class GuanyuwomenPageModule {}
