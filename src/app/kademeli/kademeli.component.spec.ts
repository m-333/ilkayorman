import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KademeliComponent } from './kademeli.component';

describe('KademeliComponent', () => {
  let component: KademeliComponent;
  let fixture: ComponentFixture<KademeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KademeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KademeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
