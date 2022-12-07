import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ChatbotService} from './services/chatbot-service';
import {Answer} from './models/answer.model';
import {Persona} from './models/persona.model';
import {Question} from './models/question.model';
import {debounceTime, Subject, Subscription} from 'rxjs';
import {CHATBOT_SERVICE_TOKEN} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  question: Question = {
    text: ''
  }
  answer?: Answer;

  categories?: string[];
  personas?: Persona[];

  error = '';

  // debouncedText = '';
  // throttledText = '';

  private questionTextSubject = new Subject<string>();

  private questionSubscription?: Subscription;

  constructor(@Inject(CHATBOT_SERVICE_TOKEN) private chatbotService: ChatbotService) {
  }

  ngOnInit(): void {
    this.chatbotService.getCategories().subscribe(value => this.categories = value);
    this.loadPersonas();

    this.questionTextSubject.pipe(
      debounceTime(1000)
    ).subscribe(_ => {
      // this.debouncedText = this.question.text;
      this.askQuestion();
    });

    // this.questionTextSubject.pipe(
    //   throttleTime(1000)
    // ).subscribe(_ => this.throttledText = this.question.text);
  }

  ngOnDestroy(): void {
    this.questionSubscription?.unsubscribe();
  }

  loadPersonas() {
    this.chatbotService.getPersonas(this.question.category).subscribe(value => this.personas = value);
  }

  inputQuestionText() {
    this.questionTextSubject.next(this.question.text);
  }

  private askQuestion() {
    this.questionSubscription?.unsubscribe();
    this.questionSubscription = this.chatbotService.askQuestion(this.question).subscribe({
      next: value => this.answer = value,
      error: error => this.error = error
    });
  }
}
