import { Component, OnInit } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public userList;
  public username;
  public nicheng;
  public image;
  constructor(public httpService: HttpserviceService, public http: HttpClient) {
    this.username = window.localStorage.getItem('username');
  }

  ngOnInit() {
    const api = 'http://localhost:3000/api/get_user/';
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post(api, {username: this.username}, httpOptions).subscribe((response) => {
      console.log(response);
      this.userList = response;
      this.nicheng = response[0].nicheng;
      this.image = response[0].image;
      if (response[0].image === null) {
        console.log('头像为默认头像');
        this.image = '../../assets/img/touxiang8.jpg';
      }
      console.log('userList:', this.userList);
    });
  }
}

