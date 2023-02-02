import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeraaComponent } from './meraa.component';

describe('MeraaComponent', () => {
  let component: MeraaComponent;
  let fixture: ComponentFixture<MeraaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeraaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeraaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
