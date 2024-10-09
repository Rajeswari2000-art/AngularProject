import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsUsersComponent } from './views-users.component';

describe('ViewsUsersComponent', () => {
  let component: ViewsUsersComponent;
  let fixture: ComponentFixture<ViewsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
