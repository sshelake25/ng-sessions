import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormLearningComponent } from './reactive-form-learning/reactive-form-learning.component';
import { RootListComponent } from './root-list/root-list.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { TemplateFormLearnComponent } from './template-form-learn/template-form-learn.component';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'reactive', component: ReactiveFormLearningComponent },
  { path: 'switch', component: SwitchCaseComponent },
  { path: 'list', component: RootListComponent },
  { path: 'template', component: TemplateFormLearnComponent },
  {path: '**', component: SwitchCaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
