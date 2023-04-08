import { Component} from '@angular/core';

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
}
