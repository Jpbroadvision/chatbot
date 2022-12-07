import {Persona} from '../models/persona.model';
import {Question} from '../models/question.model';
import {Answer} from '../models/answer.model';
import {Observable} from 'rxjs';

export abstract class ChatbotService {
  abstract askQuestion(question: Question): Observable<Answer>;
  abstract getCategories(): Observable<string[]>;
  abstract getPersonas(category?: string): Observable<Persona[]>;
}
