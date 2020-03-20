import { Component, OnInit } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-shiguangshuo',
  templateUrl: './shiguangshuo.page.html',
  styleUrls: ['./shiguangshuo.page.scss'],
})
export class ShiguangshuoPage implements OnInit {
  public username;
  public shiguangshuo;

  constructor(public httpService: HttpserviceService,
              public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.username = window.localStorage.getItem('username');
  }
  onClick() {
    console.log('时光说：', this.shiguangshuo);
    const api = 'http://localhost:3000/api/add_shiguangshuo/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api, {username: this.username, shiguangshuo: this.shiguangshuo}, httpOptions).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(['/tabs/tab2'], {
      queryParams: {}
  });
  }
}
