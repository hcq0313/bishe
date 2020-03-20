import { Component } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// 页面跳转
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public tab = 'tab1';
  public username;
  public diaryList;
  public myDiary;
  public numid;
  public myShiguang;
  public color;
  // public diary2num;
  public agree = 1;
  public zan;
  constructor(public httpService: HttpserviceService, public http: HttpClient, public router: Router,
              public activatedRoute: ActivatedRoute) {
    this.username = window.localStorage.getItem('username');
    // console.log(this.username);
  }
  newlist() {

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    console.log('username:', this.username);
    // 获取最新数据
    const api = 'http://localhost:3000/api/get_zuixin/';
    this.httpService.get(api).then((response) => {
      console.log('diaryList', response);
      this.diaryList = response;
    });
  }
  mylist() {
      // 获取我的数据
    const api2 = 'http://localhost:3000/api/get_wode/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api2, {username: this.username}, httpOptions).subscribe((response) => {
      console.log(response);
      this.myDiary = response;
      console.log('mydiary:', this.myDiary);
      // console.log('mydiary.num:', this.myDiary[0].num);

    });
  }
  goXiangqing3(item) {
    console.log('numid', item.num);
    console.log(item.text);
    this.router.navigate(['wodexiangqing'], {
      queryParams: {
        diary2num: item.diary2num,
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
  goXiangqing1(item) {
    console.log(item.text);
    this.router.navigate(['zuixinxiangqing'], {
      queryParams: {
        diary2num: item.diary2num,
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
  sglist() {
    const api3 = 'http://localhost:3000/api/get_shiguang/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api3, {username: this.username}, httpOptions).subscribe((response) => {
      console.log(response);
      this.myShiguang = response;
    });
  }
// 点赞
  dianzan(item) {
    window.event.stopPropagation();
    if (item.color === 'red') {
      item.zan = item.zan - 1;
      item.color = 'grey';
      // post提交赞数据
      const api6 = 'http://localhost:3000/api/update_zan1/';
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      this.http.post(api6, {color: item.color, zan: item.zan, diary2num: item.diary2num}, httpOptions).subscribe((response) => {
        console.log(response);
      });
    } else {
      item.zan = item.zan + 1;
      item.color = 'red';
      // post提交赞数据
      const api7 = 'http://localhost:3000/api/update_zan2/';
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      this.http.post(api7, {color: item.color, zan: item.zan, diary2num: item.diary2num}, httpOptions).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
