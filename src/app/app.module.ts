import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LigneListComponent } from './ligne-list/ligne-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LigneDetailsComponent } from './ligne-details/ligne-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LigneListComponent,
    LigneDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
