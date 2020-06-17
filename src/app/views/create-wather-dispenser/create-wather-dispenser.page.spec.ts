import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateWatherDispenserPage } from './create-wather-dispenser.page';

describe('CreateWatherDispenserPage', () => {
  let component: CreateWatherDispenserPage;
  let fixture: ComponentFixture<CreateWatherDispenserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWatherDispenserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateWatherDispenserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
