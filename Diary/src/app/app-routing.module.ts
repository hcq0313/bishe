import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'yijian',
    loadChildren: () => import('./yijian/yijian.module').then( m => m.YijianPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'yinsi',
    loadChildren: () => import('./yinsi/yinsi.module').then( m => m.YinsiPageModule)
  },
  {
    path: 'story',
    loadChildren: () => import('./story/story.module').then( m => m.StoryPageModule)
  },
  {
    path: 'shiguangshuo',
    loadChildren: () => import('./shiguangshuo/shiguangshuo.module').then( m => m.ShiguangshuoPageModule)
  },
  {
    path: 'wodeshoucang',
    loadChildren: () => import('./wodeshoucang/wodeshoucang.module').then( m => m.WodeshoucangPageModule)
  },
  {
    path: 'meiriyiju',
    loadChildren: () => import('./meiriyiju/meiriyiju.module').then( m => m.MeiriyijuPageModule)
  },
  {
    path: 'wodexiangqing',
    loadChildren: () => import('./wodexiangqing/wodexiangqing.module').then( m => m.WodexiangqingPageModule)
  },
  {
    path: 'zuixinxiangqing',
    loadChildren: () => import('./zuixinxiangqing/zuixinxiangqing.module').then( m => m.ZuixinxiangqingPageModule)
  },
  {
    path: 'yinsixiangqing',
    loadChildren: () => import('./yinsixiangqing/yinsixiangqing.module').then( m => m.YinsixiangqingPageModule)
  },
  {
    path: 'wodeziliao',
    loadChildren: () => import('./wodeziliao/wodeziliao.module').then( m => m.WodeziliaoPageModule)
  },
  {
    path: 'guanyuwomen',
    loadChildren: () => import('./guanyuwomen/guanyuwomen.module').then( m => m.GuanyuwomenPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
