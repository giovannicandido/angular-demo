import {inject, TestBed} from '@angular/core/testing';

import {NotificationService} from './notification.service';
import {MessageService} from "primeng/components/common/messageservice"

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService, MessageService]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
