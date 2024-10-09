import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsListsComponent } from './tickets-lists.component';

describe('TicketsListsComponent', () => {
  let component: TicketsListsComponent;
  let fixture: ComponentFixture<TicketsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketsListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
