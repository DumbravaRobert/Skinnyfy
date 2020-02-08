import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTabPage } from './camera-tab.page';

describe('CameraTabPage', () => {
  let component: CameraTabPage;
  let fixture: ComponentFixture<CameraTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
