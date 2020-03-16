import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZuixinxiangqingPageRoutingModule } from './zuixinxiangqing-routing.module';

import { ZuixinxiangqingPage } from './zuixinxiangqing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZuixinxiangqingPageRoutingModule
  ],
  declarations: [ZuixinxiangqingPage]
})
export class ZuixinxiangqingPageModule {}
