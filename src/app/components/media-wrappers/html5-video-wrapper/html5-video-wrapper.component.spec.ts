import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5VideoWrapperComponent } from './html5-video-wrapper.component';

describe('Html5VideoWrapperComponent', () => {
  let component: Html5VideoWrapperComponent;
  let fixture: ComponentFixture<Html5VideoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5VideoWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5VideoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
