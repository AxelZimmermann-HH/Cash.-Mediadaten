import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertorialComponent } from './advertorial.component';

describe('AdvertorialComponent', () => {
  let component: AdvertorialComponent;
  let fixture: ComponentFixture<AdvertorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
