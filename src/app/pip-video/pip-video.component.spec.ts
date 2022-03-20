import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVideoComponent } from './global-video.component';

describe('GlobalVideoComponent', () => {
  let component: GlobalVideoComponent;
  let fixture: ComponentFixture<GlobalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
