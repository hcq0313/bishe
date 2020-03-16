import { Component, OnInit } from '@angular/core';
import sd from 'silly-datetime';

// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-meiriyiju',
  templateUrl: './meiriyiju.page.html',
  styleUrls: ['./meiriyiju.page.scss'],
})
export class MeiriyijuPage implements OnInit {
public img;
public sentence;
public sheying;
public data;

  constructor(public httpService: HttpserviceService, public http: HttpClient) { }

  ngOnInit() {
    console.log('我执行了ngOnInit');
    const api = 'http://localhost:3000/api/get_meiri/';
    this.httpService.get(api).then((response: any) => {
      console.log(response);
      this.data = response;
      // console.log('data', this.data[0].img);
    });
  }

}
