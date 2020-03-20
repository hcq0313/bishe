import { Component } from '@angular/core';
import sd from 'silly-datetime';
import { ActivatedRoute, Router} from '@angular/router';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { ModalController } from '@ionic/angular';
// 引入addriji组件
import { AddrijiComponent } from './components/addriji/addriji.component';
// 引入手势事件
import 'hammerjs';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
public nowDay;
public nowDay2;
public nowDay3;
public nowDay4;
public nowDay5;
public nowDay6;
public diaryList;

public username;
public username2;

public num;

  constructor(public httpService: HttpserviceService, public http: HttpClient,
              public actionSheetController: ActionSheetController, public modalController: ModalController,  public route: Router,
              public activatedRoute: ActivatedRoute, public toastController: ToastController) {
    this.nowDay = sd.format(new Date(), 'M');
    this.nowDay2 = sd.format(new Date(), 'D');
    this.nowDay3 = sd.format(new Date(), 'YYYY');
    this.nowDay4 = sd.format(new Date(), 'MM');
    this.nowDay5 = sd.format(new Date(), 'DD');
    this.nowDay6 = sd.format(new Date(), 'MMM');
    console.log(this.nowDay6);

  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.username = window.localStorage.getItem('username');
    this.getData();
  }
  getData() {
    const api = 'http://localhost:3000/api/get_diary/';
    console.log('我要请求日记的作者是：', this.username);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api, {username: this.username}, httpOptions).subscribe((response) => {
      console.log(response);
      this.diaryList = response;
    });
  }
  async showModel() {
    const modal = await this.modalController.create({
      component: AddrijiComponent,
      // 传值
      componentProps: {month: this.nowDay4, day: this.nowDay5, username: this.username, year: this.nowDay3}
    });
    await modal.present();
  }
  goXiangqing(item) {
    console.log(item.text);
    this.route.navigate(['yinsixiangqing'], {
      queryParams: {
        num: item.num,
        username: item.username,
        title: item.title,
        text: item.text,
        weather: item.weather,
        fenlei: item.fenlei,
        quanxian: item.quanxian,
        month: item.month,
        day: item.day,
        week: item.week
      }
  });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '提示',
      buttons: [{
        text: '删除',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
          const api = 'http://localhost:3000/api/delete_mydairy/';
          this.http.post(api, { num: this.num, username: this.username
          }, httpOptions).subscribe((response) => {
            console.log(response);
          });
          this.presentToast();
        }
      }, {
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: '删除成功.',
      duration: 2000,
      color: 'dark',
      position: 'middle',
      cssClass: 'mytoast'  // 必须写在全局
    });
    toast.present();
  }
  doPress(item) {
    console.log(item);
    this.num = item.num;
    this.presentActionSheet();
  }
}


