import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeGalleryComponent } from './landscape-gallery.component';

describe('LandscapeGalleryComponent', () => {
  let component: LandscapeGalleryComponent;
  let fixture: ComponentFixture<LandscapeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapeGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandscapeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
