import { Component, OnInit } from '@angular/core';
// 接收界面参数
import {  ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-wodexiangqing',
  templateUrl: './wodexiangqing.page.html',
  styleUrls: ['./wodexiangqing.page.scss'],
})
export class WodexiangqingPage implements OnInit {
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

  constructor( public activeRoute: ActivatedRoute) {
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
      console.log('text:', this.text);
      // console.log(params.data);

  });
  }

  ngOnInit() {
  }

}
