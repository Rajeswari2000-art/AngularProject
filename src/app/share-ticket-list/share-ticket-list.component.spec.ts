import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTicketListComponent } from './share-ticket-list.component';

describe('ShareTicketListComponent', () => {
  let component: ShareTicketListComponent;
  let fixture: ComponentFixture<ShareTicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareTicketListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
