import {Persona} from '../models/persona.model';
import {Question} from '../models/question.model';
import {Answer} from '../models/answer.model';
import {Observable} from 'rxjs';

export interface ChatbotService {
  askQuestion(question: Question): Observable<Answer>;

  getCategories(): Observable<string[]>;

  getPersonas(category?: string): Observable<Persona[]>;
}
