import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTicketComponent } from './share-ticket.component';

describe('ShareTicketComponent', () => {
  let component: ShareTicketComponent;
  let fixture: ComponentFixture<ShareTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
