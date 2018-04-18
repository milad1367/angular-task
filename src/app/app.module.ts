import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ItemService }          from './item.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ItemService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
