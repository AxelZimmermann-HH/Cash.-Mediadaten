import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStandardComponent } from './online-standard.component';

describe('OnlineStandardComponent', () => {
  let component: OnlineStandardComponent;
  let fixture: ComponentFixture<OnlineStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineStandardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
