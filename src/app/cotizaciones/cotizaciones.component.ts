import { Component, OnInit } from '@angular/core';
import { Cotizacion } from '../models/Cotizacion';
import { MatTableDataSource } from '@angular/material/table';
import { CotizacionService } from '../services/cotizacion/cotizacion.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {
  private cotizaciones: Cotizacion[] = [];
  cotizacionesDataSource;
  columnsToDisplay = ['divisa', 'valor']

  constructor(
    private cotizacionService : CotizacionService
  ) { }

  ngOnInit(): void {
    this.cotizacionService.getAllCotizaciones().subscribe(
      cotizaciones => {
        this.cotizaciones = cotizaciones;
        this.cotizacionesDataSource = new MatTableDataSource(cotizaciones);
      }
    );
  }

}
