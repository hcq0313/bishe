import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // 导入弹框
  // 弹出模态对话框
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from './components/register/register.component';

// httpclient和httpheaders用于post提交数据
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public username = '';
public password;

  constructor(public alertController: AlertController, public modalController: ModalController,
              public http: HttpClient, public nav: NavController,  public router: Router,
              public activatedRoute: ActivatedRoute) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '用户名不能含有特殊字符.',
      buttons: ['确认']
    });

    await alert.present();
  }
 // 密码弹框
 async presentAlert2() {
  const alert = await this.alertController.create({
    header: '提示',
    message: '密码至少6位.',
    buttons: ['确认']
  });
  await alert.present();
}
async presentAlert3() {
  const alert = await this.alertController.create({
    header: '提示',
    message: '密码不能为空！.',
    buttons: ['确认']
  });
  await alert.present();
}
async presentAlert4() {
  const alert = await this.alertController.create({
    header: '提示',
    message: '密码错误，请重新输入.',
    buttons: ['确认']
  });
  await alert.present();
}
// 焦点触发事件
onBlur1() {
    const nameReg = /^[a-zA-Z0-9_-]{0,}$/;
    if (!nameReg.test(this.username) || this.password === '') {
      this.presentAlert();
    }
  }

  onLogin() {
    window.localStorage.setItem('username', this.username); // 保存登录时数据
    window.localStorage.setItem('password', this.password); // 保存登录时数据
    console.log('username', this.username);
    console.log('password', this.password);
    if (this.password === undefined) {
      this.presentAlert3();
      return;
    } else {
      if (this.password.length < 6) {
        this.presentAlert2();
      } else {
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const api = 'http://localhost:3000/api/login/';
        this.http.post(api, { username: this.username, password: this.password}, httpOptions).subscribe((response) => {
          console.log('response', response[0].password);
          if (this.password !== response[0].password) {
            this.presentAlert4();
            console.log('密码错误！');
          } else {
            this.router.navigate(['/tabs/tab1'], {
              queryParams: {
                  username: this.username,
              }
          });
          }
        });
      }
    }
    console.log(this.password.length);
  }
  ngOnInit() {
  }
  // 弹出注册模态对话框
  async toRegister() {
    const modal = await this.modalController.create({
      component: RegisterComponent,
      // 传值
      componentProps: {value: 123}
    });
    return await modal.present();
  }
}
