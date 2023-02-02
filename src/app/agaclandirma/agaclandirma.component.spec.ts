import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgaclandirmaComponent } from './agaclandirma.component';

describe('AgaclandirmaComponent', () => {
  let component: AgaclandirmaComponent;
  let fixture: ComponentFixture<AgaclandirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgaclandirmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgaclandirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
