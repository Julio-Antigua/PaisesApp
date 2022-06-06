import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  constructor(private paisService: PaisService) { }

  termino :string ='holaa';
  hayError:boolean = false;
  paises  :Country[] = [];

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.BuscarPais(termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;

    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError=false;
  }
    
  
  

}