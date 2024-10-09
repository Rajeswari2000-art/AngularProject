import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsListssComponent } from './tickets-listss.component';

describe('TicketsListssComponent', () => {
  let component: TicketsListssComponent;
  let fixture: ComponentFixture<TicketsListssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsListssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketsListssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
