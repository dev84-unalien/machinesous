import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomPagePage } from './nom-page.page';

describe('NomPagePage', () => {
  let component: NomPagePage;
  let fixture: ComponentFixture<NomPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
