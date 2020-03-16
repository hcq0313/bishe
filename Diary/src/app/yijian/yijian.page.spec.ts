import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YijianPage } from './yijian.page';

describe('YijianPage', () => {
  let component: YijianPage;
  let fixture: ComponentFixture<YijianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YijianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YijianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
