import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [SurveyService]
})
export class CreateComponent implements OnInit {

  
  surveyForm = new FormGroup({
    name: new FormControl(''),
    clientId: new FormControl(''),
    surveyType: new FormControl('')
  })
  survey: any;
  udpateSurvey: Function;
  locations: string;

  constructor(private ServeyService: SurveyService) {
    //console.log(ServeyService.createSurvey());
  }

  ngOnInit() {
    this.udpateSurvey = function() {
      this.ServeyService.postSurvey(this.surveyForm.value).subscribe(data => this.result = data);
      console.log(this.result);
      
    }    
  }

}
