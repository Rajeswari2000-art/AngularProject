import { TestBed } from '@angular/core/testing';

import { TicketSharingService } from './ticket-sharing.service';

describe('TicketSharingService', () => {
  let service: TicketSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
