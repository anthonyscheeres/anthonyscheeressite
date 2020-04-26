import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesInformationComponent } from './services-information.component';

describe('ServicesInformationComponent', () => {
  let component: ServicesInformationComponent;
  let fixture: ComponentFixture<ServicesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
