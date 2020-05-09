import { Component, OnInit } from '@angular/core';
// 导入弹框；NavParams用来接受modal的传值
import { AlertController, NavParams } from '@ionic/angular';
// httpclient和httpheaders用于post提交数据
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public username = '';
  public password1 = '';
  public password2 = '';
  public nicheng = '';

  constructor(public alertController: AlertController, public navParams: NavParams,
              public http: HttpClient, public toastController: ToastController) {}
  // 手机号弹框
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
      message: '两次密码应一致.',
      buttons: ['确认']
    });
    await alert.present();
  }
  ngOnInit() {}
  onBlur1() {
    const nameReg = /^[a-zA-Z0-9_-]{0,}$/;
    if (!nameReg.test(this.username)) {
      this.presentAlert();
    }
  }
  getRegister() {
    console.log(this.nicheng);
    const nameReg = /^[a-zA-Z0-9_-]{0,}$/;
    if (!nameReg.test(this.username)) {
      this.presentAlert();
    } else {
      if (this.password1 === '' || this.password2 === '') {
        this.presentAlert3();
      } else {
        if (this.password1.length < 6 || this.password2.length < 6) {
          this.presentAlert2();
        } else {
          if ( this.password1 !== this.password2) {
            this.presentAlert4();
          } else {
            console.log('注册成功！');
            const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
            const api = 'http://localhost:3000/api/register/';
            this.http.post(api, { username: this.username, password: this.password2,
               nicheng: this.nicheng}, httpOptions).subscribe((response) => {
              console.log(response);
              if (response.hasOwnProperty('num')) {
                console.log('我获取到response对象的属性值啦！');
              }
            });
            this.navParams.data.modal.dismiss();
          }
        }
      }
    }
    this.presentToast();
  }
// 关掉模态窗口
  onClose() {
    this.navParams.data.modal.dismiss();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: '注册成功.',
      duration: 1000,
      color: 'dark',
      position: 'middle',
      cssClass: 'mytoast'  // 必须写在全局
    });
    toast.present();
  }
}
