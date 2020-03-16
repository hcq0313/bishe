import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WodexiangqingPage } from './wodexiangqing.page';

describe('WodexiangqingPage', () => {
  let component: WodexiangqingPage;
  let fixture: ComponentFixture<WodexiangqingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodexiangqingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WodexiangqingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
