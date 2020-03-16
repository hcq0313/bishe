import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeiriyijuPage } from './meiriyiju.page';

describe('MeiriyijuPage', () => {
  let component: MeiriyijuPage;
  let fixture: ComponentFixture<MeiriyijuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeiriyijuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeiriyijuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
