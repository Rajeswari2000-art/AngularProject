import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisesTicketComponent } from './raises-ticket.component';

describe('RaisesTicketComponent', () => {
  let component: RaisesTicketComponent;
  let fixture: ComponentFixture<RaisesTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaisesTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaisesTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
