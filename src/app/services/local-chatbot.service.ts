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
      personaId: 'gpt3'
    },
    {
      text: 'yo',
      personaId: 'gpt3'
    },
    {
      text: 'what do you mean?',
      personaId: 'gpt1000'
    },
    {
      text: 'let me give it some though',
      personaId: 'humanoid'
    },
    {
      text: 'not right now!',
      personaId: 'humanoid'
    }
  ]

  private static readonly CATEGORIES = [
    'very special',
    'extremely special',
  ]

  private static readonly PERSONAS: Persona[] = [
    {
      id: 'gpt3',
      name: 'Chat GPT3',
      category: 'extremely special'
    },
    {
      id: 'gpt1000',
      name: 'Chat GPT1000',
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
    const targetedPersonas = LocalChatbotService.PERSONAS
      .filter(persona => !question.personaId || question.personaId === persona.id)
      .filter(persona => !question.category || question.category === persona.category)
      .map(persona => persona.id);
    const targetedAnswers = LocalChatbotService.ANSWERS
      .filter(answer => !targetedPersonas || targetedPersonas.includes(answer.personaId));

    const index = Math.floor(Math.random() * targetedAnswers.length);
    return this.createObservable(targetedAnswers[index]);
  }

  getCategories(): Observable<string[]> {
    return this.createObservable(LocalChatbotService.CATEGORIES);
  }

  getPersonas(category?: string): Observable<Persona[]> {
    return this.createObservable(LocalChatbotService.PERSONAS
      .filter(persona => !category || persona.category === category));
  }

  private createObservable(value: any): Observable<any> {
    return new Observable<any>(subscriber => {
      subscriber.next(value);
      subscriber.complete();
    });
  }
}
