import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YinsiPage } from './yinsi.page';

describe('YinsiPage', () => {
  let component: YinsiPage;
  let fixture: ComponentFixture<YinsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YinsiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YinsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
