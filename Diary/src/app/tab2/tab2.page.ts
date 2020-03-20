import { Component, ViewChild , OnInit} from '@angular/core';
import { EventEmitter } from 'eventemitter3';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  @ViewChild('slide', {static: true}) slide;
  // public event: any;

  slideOpts = {
    effect: 'flip',
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false// 这个属性很关键，拖动完自动播放
    },
    loop: true,
    zoom: false,

  };
  constructor() {
  }
  ionViewDidEnter() {
    if (this.slide) {
      this.slide.startAutoplay();
    }
  }

  ionViewDidLeave() {
    this.slide.stopAutoplay();
  }

  slideUpdate() {
    this.slide.startAutoplay();
  }
}
