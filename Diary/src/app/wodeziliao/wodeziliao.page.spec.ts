import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WodeziliaoPage } from './wodeziliao.page';

describe('WodeziliaoPage', () => {
  let component: WodeziliaoPage;
  let fixture: ComponentFixture<WodeziliaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodeziliaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WodeziliaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
