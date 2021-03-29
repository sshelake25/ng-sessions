import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootListComponent } from './root-list/root-list.component';
import { ProductInfoComponent } from './root-list/product-info/product-info.component';
import { CartComponent } from './root-list/cart/cart.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ReactiveFormLearningComponent } from './reactive-form-learning/reactive-form-learning.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormLearnComponent } from './template-form-learn/template-form-learn.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    RootListComponent,
    ProductInfoComponent,
    CartComponent,
    SwitchCaseComponent,
    ReactiveFormLearningComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TemplateFormLearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, /// if we mieesedd,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
