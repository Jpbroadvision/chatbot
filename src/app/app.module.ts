import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatbotService} from './services/chatbot-service';
import {FormsModule} from '@angular/forms';
import {RemoteChatbotService} from './services/remote-chatbot.service';
import {HttpClientModule} from '@angular/common/http';

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
  providers: [{provide: ChatbotService, useClass: RemoteChatbotService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
