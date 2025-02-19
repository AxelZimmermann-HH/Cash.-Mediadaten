import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerAdsComponent } from './layer-ads.component';

describe('LayerAdsComponent', () => {
  let component: LayerAdsComponent;
  let fixture: ComponentFixture<LayerAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerAdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayerAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
