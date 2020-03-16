import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiguangshuoPage } from './shiguangshuo.page';

describe('ShiguangshuoPage', () => {
  let component: ShiguangshuoPage;
  let fixture: ComponentFixture<ShiguangshuoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiguangshuoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiguangshuoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
