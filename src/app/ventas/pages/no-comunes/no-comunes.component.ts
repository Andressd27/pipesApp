import { Component} from '@angular/core';
import { rejects } from 'assert';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{

  //i18nSelected
  nombre: string = 'Andres';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Andres', 'Juliana'];
  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Miguel';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // Key Value Pipe
  persona = {
    nombre: 'Andres',
    edad: 29,
    direccion: 'Florida, Colombia'
  }

  //json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: false
    }
  ]

  //Async pipe
  miObservsble = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
    resolve( 'Tenemos data de promesa' );
    }, 3500 );
  });
}
