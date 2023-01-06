import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage implements OnInit {
  public nombre: string = '';
  public precio: string = '';
  public metrosCuadrados: string = '';
  public numeroDormitorios: string = '';
  public banios: string = '';
  public comuna: string = '';
  public codigoDePropiedad: string = '';
  public fechaDeEntrega: string = '';
  public estadoDelProyecto: string = '';
  public imagen: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(departamentos => {
      this.nombre = departamentos['nombre'] || 'Sin nombre';
      this.precio = departamentos['precio'] || 'Sin precio';
      this.metrosCuadrados = departamentos['metrosCuadrados'] || 'No especificado';
      this.numeroDormitorios = departamentos['numeroDormitorios'] || 'No especificado';
      this.banios = departamentos['banios'] || 'No especificado';
      this.comuna = departamentos['comuna'] || 'No especificado';
      this.codigoDePropiedad = departamentos['codigoDePropiedad'] || 'No especificado';
      this.fechaDeEntrega = departamentos['fechaDeEntrega'] || 'No especificado';
      this.estadoDelProyecto = departamentos['estadoDelProyecto'] || 'No especificado';
      this.imagen = departamentos['imagen'] || 'Sin imagen';

    })
  }

}
