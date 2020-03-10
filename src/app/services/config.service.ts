import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '../models/config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`
  constructor(private httpClient: HttpClient) { }

  getConfig() { 
    return this.httpClient.get<IConfig>(this.configUrl);
  }
}
