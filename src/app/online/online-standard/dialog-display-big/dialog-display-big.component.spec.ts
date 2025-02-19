import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDisplayBigComponent } from './dialog-display-big.component';

describe('DialogDisplayBigComponent', () => {
  let component: DialogDisplayBigComponent;
  let fixture: ComponentFixture<DialogDisplayBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDisplayBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDisplayBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
