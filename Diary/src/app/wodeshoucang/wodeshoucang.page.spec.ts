import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WodeshoucangPage } from './wodeshoucang.page';

describe('WodeshoucangPage', () => {
  let component: WodeshoucangPage;
  let fixture: ComponentFixture<WodeshoucangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodeshoucangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WodeshoucangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
