import { TestBed } from '@angular/core/testing';

import { TicketUpdatesService } from './ticket-updates.service';

describe('TicketUpdatesService', () => {
  let service: TicketUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
