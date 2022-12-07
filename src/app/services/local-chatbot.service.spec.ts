import { TestBed } from '@angular/core/testing';

import { LocalChatbotService } from './local-chatbot.service';

describe('LocalChatbotService', () => {
  let service: LocalChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
