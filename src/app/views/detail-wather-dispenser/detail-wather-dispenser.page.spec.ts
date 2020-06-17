import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailWatherDispenserPage } from './detail-wather-dispenser.page';

describe('DetailWatherDispenserPage', () => {
  let component: DetailWatherDispenserPage;
  let fixture: ComponentFixture<DetailWatherDispenserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailWatherDispenserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailWatherDispenserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
