import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nl2FormatsComponent } from './nl2-formats.component';

describe('Nl2FormatsComponent', () => {
  let component: Nl2FormatsComponent;
  let fixture: ComponentFixture<Nl2FormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nl2FormatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nl2FormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
