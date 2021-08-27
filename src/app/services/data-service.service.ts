import { Injectable } from '@angular/core';
import { HttpResponseBase, HttpHeaders, HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http'
import { AppInfoService } from './app.info.service';
import { Observable, Subject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
// import { UserModel, JWTokenModel } from '../models'
import { EntityResponse } from '../models/reponses/entity.response';
import { ListResponse } from '../models/reponses/list.response';
import { TimeSeriesModel } from '../models/time.series';
import { AppUtilities } from './app.utilities';
import { Appkeys } from './app.keys';

@Injectable({ providedIn: 'root' })
export class DataService{

 // tokenValue: JWTokenModel;
  baseUrl: string;
  token:string;
  errorMessage: string;

  constructor(public router: Router, public http: HttpClient, appInfo: AppInfoService) {
    this.baseUrl = appInfo.apiBaseUrl;
    this.http = http;
    this.token = localStorage.getItem(Appkeys.ACCESS_TOKEN);
  }

  // RegisterUser(user: UserModel): Observable<EntityResponse<UserModel>> {
  //   var subject = new Subject<any>();
  //   this.http.post<UserModel>(this.baseUrl + '/users/insertuser', AppUtilities.JSonstringify(user), { headers: AppUtilities.getHttpHeadersApplicationJson(this.token) }).subscribe(result => {
  //     subject.next(result);
  //     return subject.asObservable();
  //   },
  //     error => {
  //       subject.next(error);
  //     }
  //   );

  //   return subject.asObservable();
  // }


  GetDataService(): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<TimeSeriesModel>>(this.baseUrl + '/GetData', { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }


  GetDataServiceLearned(): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<TimeSeriesModel>>(this.baseUrl + '/GetLearnData', { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }


  GetDataServiceAnalysis(): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<TimeSeriesModel>>(this.baseUrl + '/Analysis', { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }



  GetDataServiceAnalysis2(): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<TimeSeriesModel>>(this.baseUrl + '/Analysis2', { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }


  GetDataServiceAnalysis3(): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<TimeSeriesModel>>(this.baseUrl + '/Analysis3', { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }

  
  GetDataFileExsist(): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<any>>(this.baseUrl + '/FileExsist', { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }


  DeleteFile(Filename): Observable<any> {
    var subject = new Subject<any>();
    this.http.get<ListResponse<any>>(this.baseUrl + '/Deletefile?Filename='+Filename, { headers: AppUtilities.getHttpHeadersApplicationJson('this.token') }).subscribe(result => {
      subject.next(result);
      return subject.asObservable();
    },
      error => {
        subject.next(error);
      }
    );

    return subject.asObservable();
  }

  // EditUserDetails(usermodel: UserModel): Observable<EntityResponse<UserModel>> {
  //   var subject = new Subject<any>();
  //   this.http.put<JWTokenModel>(this.baseUrl + '/users/updateuser', AppUtilities.JSonstringify(usermodel), { headers: AppUtilities.getHttpHeadersApplicationJson(this.token) }).subscribe(result => {
  //     subject.next(result);
  //     return subject.asObservable();
  //   },
  //     error => {
  //       subject.next(error);
  //     }
  //   );

  //   return subject.asObservable();
  // }
}

