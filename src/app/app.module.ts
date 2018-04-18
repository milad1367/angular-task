import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ItemService }          from './item.service';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ItemsComponent } from './items/items.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [ItemService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
