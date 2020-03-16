import { Component, OnInit } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// 页面跳转
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-wodeziliao',
  templateUrl: './wodeziliao.page.html',
  styleUrls: ['./wodeziliao.page.scss'],
})
export class WodeziliaoPage implements OnInit {
  // public userList;
  public username;
  public nicheng;
  public qianming;
  constructor(public httpService: HttpserviceService, public http: HttpClient, public router: Router,
              public activatedRoute: ActivatedRoute) {
    this.username = window.localStorage.getItem('username');
  }

  ngOnInit() {
  }

  postShuju() {
    console.log('昵称：', this.nicheng);
    console.log('签名：', this.qianming);
    const api = 'http://localhost:3000/api/add_myziliao/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api, {username: this.username, nicheng: this.nicheng, qianming: this.qianming}, httpOptions).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(['tabs/tab4'], {});
  }
}
