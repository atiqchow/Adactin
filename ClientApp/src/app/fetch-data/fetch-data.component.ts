import ***REMOVED*** Component, Inject ***REMOVED*** from '@angular/core';
import ***REMOVED*** HttpClient ***REMOVED*** from '@angular/common/http';

@Component(***REMOVED***
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
***REMOVED***)
export class FetchDataComponent ***REMOVED***
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) ***REMOVED***
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => ***REMOVED***
      this.forecasts = result;
***REMOVED***, error => console.error(error));
***REMOVED***
***REMOVED***

interface WeatherForecast ***REMOVED***
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
***REMOVED***
