import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa','americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  region: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string){
    if(region === this.regionActiva){return};
    this.regionActiva = region;

    this.paisService.buscarRegion(region).subscribe(region => 
    {
      console.log(region);
      this.region = region;
    });

  }

  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary mr-1': 'btn btn-outline-primary mr-1';
    //esta linea hace una condicion de css
    // ? significa que si la condicion es igual
    // : significa que si es diferente

  }
  

}
