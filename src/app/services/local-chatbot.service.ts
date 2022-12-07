import { Injectable } from '@angular/core';
import {ChatbotService} from './chatbot-service';

@Injectable()
export class LocalChatbotService implements ChatbotService {

  private static readonly ANSWERS = [
    'totally',
    'yo',
    'what do you mean?',
    'let me give it some though'
  ]

  constructor() { }

  askQuestion(question: string): string {
    const index = Math.floor(Math.random() * LocalChatbotService.ANSWERS.length);
    return LocalChatbotService.ANSWERS[index];
  }
}
