import { inject, TestBed } from '@angular/core/testing';
import { ErrorNotification } from './notification';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
      ],
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));

  it('should count', inject([NotificationService], (service: NotificationService) => {
    service.publish(new ErrorNotification('message', 'error'));
    expect(service.count).toBe(1);
  }));

  it('should be destroyed', inject([NotificationService], (service: NotificationService) => {
    service.ngOnDestroy();
    expect().nothing();
  }));

  it('should clear', inject([NotificationService], (service: NotificationService) => {
      service.clear();
      expect(service.count).toEqual(0);
    }));
});
