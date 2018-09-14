import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {
  }
  getSurveys(){   
    return this.http.get("http://localhost:1337/surveys/fetch");
  }

  postSurvey(data){   
    return this.http.post("http://localhost:1337/surveys/create", data);
  }
}
