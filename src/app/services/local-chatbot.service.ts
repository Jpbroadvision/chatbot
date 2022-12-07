import {Injectable} from '@angular/core';
import {ChatbotService} from './chatbot-service';
import {Persona} from '../models/persona.model';
import {Answer} from '../models/answer.model';
import {Question} from '../models/question.model';
import {Observable} from 'rxjs';

@Injectable()
export class LocalChatbotService implements ChatbotService {

  private static readonly ANSWERS: Answer[] = [
    {
      text: 'totally',
      personaId: ''
    },
    {
      text: 'yo',
      personaId: ''
    },
    {
      text: 'what do you mean?',
      personaId: ''
    },
    {
      text: 'let me give it some though',
      personaId: ''
    },
  ]

  private static readonly CATEGORIES = [
    'very special',
    'extremely special'
  ]

  private static readonly PERSONAS: Persona[] = [
    {
      id: 'gpt3',
      name: 'Chat GPT3',
      category: 'extremely special'
    },
    {
      id: 'humanoid',
      name: 'The Humanoid',
      category: 'very special'
    }
  ]

  constructor() {
  }

  askQuestion(question: Question): Observable<Answer> {
    const index = Math.floor(Math.random() * LocalChatbotService.ANSWERS.length);
    return this.createObservable(LocalChatbotService.ANSWERS[index]);
  }

  getCategories(): Observable<string[]> {
    return this.createObservable(LocalChatbotService.CATEGORIES);
  }

  getPersonas(category?: string): Observable<Persona[]> {
    return this.createObservable(LocalChatbotService.PERSONAS.filter(persona => !category || persona.category === category));
  }

  private createObservable(value: any): Observable<any> {
    return new Observable<any>(subscriber => {
      subscriber.next(value);
      subscriber.complete();
    });
  }
}
