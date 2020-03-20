import { Component, OnInit } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
// 导入弹框
import { AlertController } from '@ionic/angular';
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
  constructor(public alertController: AlertController, public httpService: HttpserviceService,
              public http: HttpClient, public router: Router) {
    this.username = window.localStorage.getItem('username');
  }

  ngOnInit() {
    if (this.image === undefined) {
      this.image = '../../assets/img/touxiang8.jpg';
    }
    console.log('this.img', this.image);
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
    // 弹框
    async presentAlertMultipleButtons() {
      const alert = await this.alertController.create({
        header: '提示信息!',
        message: '确定退出登录?',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',   // 注意自定义class写在全局
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: '确定',
            handler: () => {
              window.localStorage.removeItem('username');
              window.localStorage.removeItem('password');
              this.router.navigate(['/login'], {
                queryParams: {
                    username: this.username,
                }
            });
            }
          }
        ]
      });
      await alert.present();
    }
  loginOut() {
    this.presentAlertMultipleButtons();

  //   this.router.navigate(['/login'], {
  //     queryParams: {
  //         username: this.username,
  //     }
  // });
  }

}

