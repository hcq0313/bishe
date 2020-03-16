import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YijianPageRoutingModule } from './yijian-routing.module';

import { YijianPage } from './yijian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YijianPageRoutingModule
  ],
  declarations: [YijianPage]
})
export class YijianPageModule {}
