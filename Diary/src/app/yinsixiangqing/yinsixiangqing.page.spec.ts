import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YinsixiangqingPage } from './yinsixiangqing.page';

describe('YinsixiangqingPage', () => {
  let component: YinsixiangqingPage;
  let fixture: ComponentFixture<YinsixiangqingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YinsixiangqingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YinsixiangqingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
