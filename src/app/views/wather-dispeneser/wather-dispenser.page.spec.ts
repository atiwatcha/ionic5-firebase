import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatherDispeneserPage } from './wather-dispenser.page';

describe('WatherDispeneserPage', () => {
  let component: WatherDispeneserPage;
  let fixture: ComponentFixture<WatherDispeneserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatherDispeneserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatherDispeneserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
