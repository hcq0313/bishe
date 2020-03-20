import { Component, OnInit } from '@angular/core';
import sd from 'silly-datetime';

// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';
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
public username;

  constructor(public httpService: HttpserviceService, public http: HttpClient) { }

  ngOnInit() {
    this.username = window.localStorage.getItem('username');
    const api = 'http://localhost:3000/api/get_meiri/';
    this.httpService.get(api).then((response: any) => {
      console.log(response);
      this.data = response;
    });
  }
  shoucang(item) {
    console.log('item.id', item.id);
    if (item.color === 'yellow') {
      item.color = 'grey';
      // post提交收藏数据
      const api7 = 'http://localhost:3000/api/update_shoucang/';
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      this.http.post(api7, {username: this.username, id: item.id, color: item.color}, httpOptions).subscribe((response) => {
        console.log('response', response);
      });
    } else {
      item.color = 'yellow';
      // post提交收藏数据
      const api6 = 'http://localhost:3000/api/insert_shoucang/';
      const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
      this.http.post(api6, {username: this.username, id: item.id, color: item.color}, httpOptions).subscribe((response) => {
        console.log(response);
      });


    }
  }
}
