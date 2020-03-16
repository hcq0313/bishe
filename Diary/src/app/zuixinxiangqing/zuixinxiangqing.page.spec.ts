import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZuixinxiangqingPage } from './zuixinxiangqing.page';

describe('ZuixinxiangqingPage', () => {
  let component: ZuixinxiangqingPage;
  let fixture: ComponentFixture<ZuixinxiangqingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZuixinxiangqingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZuixinxiangqingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
