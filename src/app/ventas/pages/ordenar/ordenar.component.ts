import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'ventas-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public order: boolean = true;

  public heroes: Hero[] = [
    {
      name:   'Superman',
      canFly: true,
      color:  Color.blue
    },
    {
      name:   'Batman',
      canFly: false,
      color:  Color.black
    },
    {
      name:   'Daredevil',
      canFly: false,
      color:  Color.red
    },
    {
      name:   'Robin',
      canFly: false,
      color:  Color.red
    },
    {
      name:   'Linterna Verde',
      canFly: true,
      color:  Color.green
    }
  ]

  toggleUppeCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ): void {
    this.orderBy === value
      ? this.order = !this.order
      : (this.orderBy = value, this.order = true)
  }
}
