import { Component, OnInit } from '@angular/core';
// 接收界面参数
import {  ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-yinsixiangqing',
  templateUrl: './yinsixiangqing.page.html',
  styleUrls: ['./yinsixiangqing.page.scss'],
})
export class YinsixiangqingPage implements OnInit {
  public num;
  public username;
  public title;
  public text;
  public weather;
  public fenlei;
  public quanxian;
  public month;
  public day;
  public week;
  constructor(public activeRoute: ActivatedRoute, public route: Router) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.num = params.num;
      this.username = params.username;
      this.title = params.title;
      this.text = params.text;
      this.weather = params.weather;
      this.fenlei = params.fenlei;
      this.quanxian = params.quanxian;
      this.month = params.month;
      this.day = params.day;
      this.week = params.week;
      console.log('username:', this.username);
      console.log('title:', this.title);
      console.log('num:', this.num);
      // console.log(params.data);

  });
  }

  ngOnInit() {
  }
  showBianji() {
    // this.route.navigate(['wodebianji']);
    this.route.navigate(['wodebianji'], {
      queryParams: {
        num: this.num,
        username: this.username,
        title: this.title,
        text: this.text,
        weather: this.weather,
        fenlei: this.fenlei,
        quanxian: this.quanxian,
        month: this.month,
        day: this.day,
        week: this.week
      }
  });
  }
}
