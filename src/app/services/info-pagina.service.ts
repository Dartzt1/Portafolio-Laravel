import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info.pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina ={};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) 
  { 
   // console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarequipo();
    

  }

  private cargarInfo()
  {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp : InfoPagina) => { 
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarequipo ()
  {
    // Leer el archivo JSON
    this.http.get<Array<any>>('https://angular-html-7218e-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( ( resp : any[] ) => { 
      this.equipo = resp;
      //console.log(resp); 
    
    });

    // this.equipo = resp
  }

}
