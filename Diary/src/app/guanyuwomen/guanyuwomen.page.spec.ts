import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuanyuwomenPage } from './guanyuwomen.page';

describe('GuanyuwomenPage', () => {
  let component: GuanyuwomenPage;
  let fixture: ComponentFixture<GuanyuwomenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuanyuwomenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuanyuwomenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
