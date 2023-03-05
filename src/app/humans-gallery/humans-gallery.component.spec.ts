import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumansGalleryComponent } from './humans-gallery.component';

describe('HumansGalleryComponent', () => {
  let component: HumansGalleryComponent;
  let fixture: ComponentFixture<HumansGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumansGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumansGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
