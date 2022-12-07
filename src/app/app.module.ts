import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LocalChatbotService} from './services/local-chatbot.service';
import {ChatbotService} from './services/chatbot-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: ChatbotService, useClass: LocalChatbotService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
