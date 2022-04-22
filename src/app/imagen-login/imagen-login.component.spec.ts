import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenLoginComponent } from './imagen-login.component';

describe('ImagenLoginComponent', () => {
  let component: ImagenLoginComponent;
  let fixture: ComponentFixture<ImagenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
