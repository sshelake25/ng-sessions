import { Component, Directive, NgModule } from '@angular/core';
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

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PersonsDetailsComponent } from './person-components/persons-details/persons-details.component';
import { PersonInfoService } from './person/person-info.service';
import { BirthdayPipe } from './birthday.pipe';


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
    TemplateFormLearnComponent,
    PersonsDetailsComponent,
    BirthdayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, /// if we mieesedd,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// @Component({
//   template: '',
//   selector: '',

// })
// @NgModule({
//   declarations: [],
//   imports: [],
//   exports: []
// })
// @Directive({
//   selector: '[appHighlight]'
// })
export class myComponent {

}
