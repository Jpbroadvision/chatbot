import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LocalChatbotService} from './services/local-chatbot.service';

export const CHATBOT_SERVICE_TOKEN = 'chatbot-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: CHATBOT_SERVICE_TOKEN, useClass: LocalChatbotService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
