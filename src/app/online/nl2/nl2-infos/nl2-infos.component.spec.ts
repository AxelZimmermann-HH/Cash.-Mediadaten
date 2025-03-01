import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nl2InfosComponent } from './nl2-infos.component';

describe('Nl2InfosComponent', () => {
  let component: Nl2InfosComponent;
  let fixture: ComponentFixture<Nl2InfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nl2InfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nl2InfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
