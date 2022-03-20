import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5AudioWrapperComponent } from './html5-audio-wrapper.component';

describe('Html5AudioWrapperComponent', () => {
  let component: Html5AudioWrapperComponent;
  let fixture: ComponentFixture<Html5AudioWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5AudioWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5AudioWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
