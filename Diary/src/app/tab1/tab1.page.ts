import { Component } from '@angular/core';
import sd from 'silly-datetime';
import { ActivatedRoute, Router} from '@angular/router';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { ModalController } from '@ionic/angular';
// 引入addriji组件
import { AddrijiComponent } from './components/addriji/addriji.component';

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

  constructor(public httpService: HttpserviceService, public http: HttpClient,
              public modalController: ModalController,  public route: Router,
              public activatedRoute: ActivatedRoute) {
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
    console.log('我执行完ngOnInit啦！');
    this.username = window.localStorage.getItem('username');
    this.getData();
  }
  getData() {
    console.log('我执行了getdata');
    const api = 'http://localhost:3000/api/get_diary/';
    console.log('我要请求日记的作者是：', this.username);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api, {username: this.username}, httpOptions).subscribe((response) => {
      console.log(response);
      this.diaryList = response;
    });
    console.log('我执行完了post请求');
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
    this.route.navigate(['zuixinxiangqing'], {
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

}


