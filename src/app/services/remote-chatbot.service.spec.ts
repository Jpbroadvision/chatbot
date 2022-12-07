import {TestBed} from '@angular/core/testing';

import {RemoteChatbotService} from './remote-chatbot.service';

describe('RemoteChatbotService', () => {
  let service: RemoteChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
