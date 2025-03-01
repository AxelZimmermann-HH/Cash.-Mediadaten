import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstaStoryComponent } from './dialog-insta-story.component';

describe('DialogInstaStoryComponent', () => {
  let component: DialogInstaStoryComponent;
  let fixture: ComponentFixture<DialogInstaStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInstaStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogInstaStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
