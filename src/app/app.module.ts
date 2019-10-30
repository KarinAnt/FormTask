import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SteponeComponent } from './stepone/stepone.component';
import { SteptwoComponent } from './steptwo/steptwo.component';
import { CreditCardComponent } from './credit-card/credit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SteponeComponent,
    SteptwoComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
