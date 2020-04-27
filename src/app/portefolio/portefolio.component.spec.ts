import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefolioComponent } from './portefolio.component';

describe('PortefolioComponent', () => {
  let component: PortefolioComponent;
  let fixture: ComponentFixture<PortefolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
