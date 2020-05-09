import { Component, OnInit } from '@angular/core';
// 接收界面参数
import {  ActivatedRoute, Params } from '@angular/router';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-zuixinxiangqing',
  templateUrl: './zuixinxiangqing.page.html',
  styleUrls: ['./zuixinxiangqing.page.scss'],
})
export class ZuixinxiangqingPage implements OnInit {
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
  public comList;
  public diary2num;
  public pinglun;
  constructor( public httpService: HttpserviceService, public http: HttpClient, public activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.diary2num = params.diary2num;
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
      console.log('diary2num:', this.diary2num);
      // console.log(params.data);

  });
}


  ngOnInit() {
    this.username = window.localStorage.getItem('username');
    // 获取评论
    const api1 = 'http://localhost:3000/api/get_comment/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api1, {diary2num: this.diary2num}, httpOptions).subscribe((response) => {
      console.log('返回评论的数据：', response);
      this.comList = response;
    });
  }
  onComment() {
    console.log('提交评论啦！', this.pinglun);
    const api2 = 'http://localhost:3000/api/insert_comment/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api2, {diary2num: this.diary2num, username: this.username, comtext: this.pinglun}, httpOptions).subscribe((response) => {
      console.log('提交评论：', response);
      // location.replace('/zuixinxiangqing');
    });
    this.pinglun = '';
  }
}
