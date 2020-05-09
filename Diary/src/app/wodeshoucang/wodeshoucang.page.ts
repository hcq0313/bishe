import { Component, OnInit } from '@angular/core';
// 引入http模块
import { HttpserviceService } from '../services/httpservice.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-wodeshoucang',
  templateUrl: './wodeshoucang.page.html',
  styleUrls: ['./wodeshoucang.page.scss'],
})
export class WodeshoucangPage implements OnInit {
public data;
public img;
public sentence;
public sheying;
public username;
public id;
  constructor(public httpService: HttpserviceService, public http: HttpClient,
              public actionSheetController: ActionSheetController, public toastController: ToastController) { }

  ngOnInit() {
    const api = 'http://localhost:3000/api/get_shoucang/';
    this.httpService.get(api).then((response: any) => {
      console.log(response);
      this.data = response;
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '提示',
      buttons: [{
        text: '删除',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
          const api = 'http://localhost:3000/api/delete_shoucang/';
          this.http.post(api, { id: this.id, username: this.username
          }, httpOptions).subscribe((response) => {
            console.log(response);
          });
          this.presentToast();
          location.replace('/wodeshoucang');
        }
      }, {
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  shanchu(item) {
    // console.log(item);
    this.id = item.id;
    this.username = item.username;
    this.presentActionSheet();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: '删除成功.',
      duration: 2000,
      // color: 'dark',
      position: 'middle',
      cssClass: 'mytoast'  // 必须写在全局
    });
    toast.present();
  }

}
