import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddrijiComponent } from './addriji.component';

describe('AddrijiComponent', () => {
  let component: AddrijiComponent;
  let fixture: ComponentFixture<AddrijiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrijiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddrijiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
