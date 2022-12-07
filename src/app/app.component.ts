import {Component} from '@angular/core';
import {ChatbotService} from './services/chatbot-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer?: string;

  constructor(private chatbotService: ChatbotService) {
  }

  askQuestion(question: string) {
    this.answer = this.chatbotService.askQuestion(question);
  }
}
