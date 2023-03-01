import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetGalleryComponent } from './street-gallery.component';

describe('StreetGalleryComponent', () => {
  let component: StreetGalleryComponent;
  let fixture: ComponentFixture<StreetGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
