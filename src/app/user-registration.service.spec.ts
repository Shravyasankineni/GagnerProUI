import { TestBed } from '@angular/core/testing';
import { UserRegistationService } from './user-registration.service';


describe('UserRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegistationService = TestBed.get(UserRegistationService);
    expect(service).toBeTruthy();
  });
});
