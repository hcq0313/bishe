import { Component, OnInit } from '@angular/core';
// 接受modal页面的传值
import { NavParams } from '@ionic/angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { AlertController } from '@ionic/angular';
// 定位
import {Geolocation} from '@ionic-native/geolocation/ngx';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addriji',
  templateUrl: './addriji.component.html',
  styleUrls: ['./addriji.component.scss'],
})
export class AddrijiComponent implements OnInit {
public month;
public day;
public now;
public week;
public year;

public text;
public title;

public username;

public color = 'grey';
public chooseInfo: any = {
  weatherList: ['阴', '晴', '雨', '雪', '雾', '多云'],
  weather: '晴',
  fenleiList: ['日常', '旅行', '随笔', '心情', '其他'],
  fenlei: ['日常'],
  quanxianList: ['隐私', '公开'],
  quanxian: ['公开']
};

public gongkai = true;
  constructor(public navParams: NavParams, private imagePicker: ImagePicker, public http: HttpClient,
              public alertController: AlertController, public geolocation: Geolocation, public nav: NavController)  {
    this.month = this.navParams.data.month;
    this.day = this.navParams.data.day;
    this.username = window.localStorage.getItem('username');
    this.year = this.navParams.data.year;

  }

  ngOnInit() {
    this.now = new Date();
    this.week = this.transform(this.now);
    console.log(this.week);
    this.username = window.localStorage.getItem('username');

  }

  doClose() {
    this.navParams.data.modal.dismiss();
  }
  doClose2() {
    this.navParams.data.modal.dismiss();
  }

// 获取当前时间 判断是星期几
  transform(value: any): any {
    if (value !== undefined) {
      const weekArray = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
      const myDate = new Date(value);
      const week = weekArray[myDate.getDay()];
      return week;
    }
  }
// choosepicture
  choosePicture() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
    };
    this.imagePicker.getPictures( options ).then((results) => {
      for (const i of results.length) {
        console.log(results.length);
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
      console.log('获取图片失败！');
     });
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '心情不能为空哦~',
      buttons: ['确认']
    });
    await alert.present();
  }
  test() {
      // this.presentAlertCheckbox();
      console.log('日记：', this.text);
      console.log('标题：', this.title);
      console.log('天气：', this.chooseInfo.weather);
      console.log('分类：', this.chooseInfo.fenlei);
      console.log('权限：', this.chooseInfo.quanxian);
      if (this.text === undefined) {
        // console.log('kkkkk');
        this.presentAlert2();
      } else {
        console.log('this.chooseInfo.quanxian:', this.chooseInfo.quanxian);
        if (this.chooseInfo.quanxian === '隐私' ) {
          console.log('日记权限是隐私啊！！');
          const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
          const api = 'http://localhost:3000/api/add_riji/';
          this.http.post(api, {username: this.username, title: this.title, text: this.text,
            weather: this.chooseInfo.weather, fenlei: this.chooseInfo.fenlei, quanxian: this.chooseInfo.quanxian,
            week: this.week, month: this.month, day: this.day
          }, httpOptions).subscribe((response) => {
            console.log(response);
            this.doClose2();
          });
          location.replace('/tabs/tab1');
        } else {
          console.log('this.chooseInfo.quanxian:', this.chooseInfo.quanxian);
          console.log('日记权限是公开呀！！');
          const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
          const api = 'http://localhost:3000/api/add_riji2/';
          this.http.post(api, {username: this.username, title: this.title, text: this.text,
            weather: this.chooseInfo.weather, fenlei: this.chooseInfo.fenlei, quanxian: this.chooseInfo.quanxian,
            week: this.week, month: this.month, day: this.day, color: this.color
          }, httpOptions).subscribe((response) => {
            console.log(response);
            this.doClose2();
          });
          location.replace('/tabs/tab3');
        }
      }
    }
}
