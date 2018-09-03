import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsMenuComponent } from './thumbnails-menu.component';

describe('ThumbnailsMenuComponent', () => {
  let component: ThumbnailsMenuComponent;
  let fixture: ComponentFixture<ThumbnailsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
