import { Component, OnInit } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// 页面跳转
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-yijian',
  templateUrl: './yijian.page.html',
  styleUrls: ['./yijian.page.scss'],
})
export class YijianPage implements OnInit {
public phone;
public yijian;
public username;
constructor(public httpService: HttpserviceService, public http: HttpClient, public router: Router,
            public activatedRoute: ActivatedRoute) {
this.username = window.localStorage.getItem('username');
}

  ngOnInit() {
  }
  postShuju() {
    console.log('联系方式：', this.phone);
    console.log('意见：', this.yijian);
    const api = 'http://localhost:3000/api/add_yijian/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api, {username: this.username, yijian: this.yijian,
       phone: this.phone}, httpOptions).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(['tabs/tab4'], {});
  }
}
