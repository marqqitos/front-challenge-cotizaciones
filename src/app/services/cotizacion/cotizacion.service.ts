import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cotizacion } from 'src/app/models/Cotizacion';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private http: HttpClient) { }

  getAllCotizaciones(): Observable<Cotizacion[]> {
    return this.http.get<Cotizacion[]>(environment.backendUrl + 'cotizacion/all');
  }

}
