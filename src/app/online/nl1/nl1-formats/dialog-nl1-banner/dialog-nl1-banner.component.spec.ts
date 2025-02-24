import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNl1BannerComponent } from './dialog-nl1-banner.component';

describe('DialogNl1BannerComponent', () => {
  let component: DialogNl1BannerComponent;
  let fixture: ComponentFixture<DialogNl1BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogNl1BannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogNl1BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
