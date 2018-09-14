import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:  [CreateComponent, ListSurveyComponent],
  bootstrap: [CreateComponent],
  declarations: [CreateComponent, ListSurveyComponent]
})
export class SurveyModule { }
