import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ChatbotService} from './chatbot-service';
import {Persona} from '../models/persona.model';
import {catchError, Observable} from 'rxjs';
import {Answer} from '../models/answer.model';
import {Question} from '../models/question.model';
import {environment} from '../../environments/environment';

@Injectable()
export class RemoteChatbotService implements ChatbotService {

  private static readonly QUESTIONS_PATH = '/questions';
  private static readonly CATEGORIES_PATH = '/categories';
  private static readonly PERSONAS_PATH = '/personas';

  constructor(private http: HttpClient) {
  }

  askQuestion(question: Question): Observable<Answer> {
    const url = this.buildUrl(RemoteChatbotService.QUESTIONS_PATH);
    return this.http.post<Answer>(url, question).pipe(
      catchError(this.handleError)
    );
  }

  getCategories(): Observable<string[]> {
    const url = this.buildUrl(RemoteChatbotService.CATEGORIES_PATH);
    return this.http.get<string[]>(url);
  }

  getPersonas(category?: string): Observable<Persona[]> {
    const url = this.buildUrl(RemoteChatbotService.PERSONAS_PATH);
    const params = category ? new HttpParams().set('category', category) : {};
    return this.http.get<Persona[]>(url, {params: params});
  }

  private buildUrl(path: string): string {
    return `${environment.baseUrl}${path}`
  }

  private handleError(error: any): Observable<never> {
    throw new Error('Oops something went wrong! Please try again later.');
  }
}
