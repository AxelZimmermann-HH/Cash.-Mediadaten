import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDisplaySmallComponent } from './dialog-display-small.component';

describe('DialogDisplaySmallComponent', () => {
  let component: DialogDisplaySmallComponent;
  let fixture: ComponentFixture<DialogDisplaySmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDisplaySmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDisplaySmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
