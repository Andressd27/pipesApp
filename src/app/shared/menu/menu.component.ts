import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  items2: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: 'stg'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];

    // this.items2 = [
    //   {
    //       label: 'File',
    //       icon:'pi pi-fw pi-file',
    //       items: [{
    //               label: 'New',
    //               icon:'pi pi-fw pi-plus',
    //               items: [
    //                 {label: 'Bookmark', icon:'pi pi-fw pi-bookmark'},
    //                 {label: 'Video', icon:'pi pi-fw pi-video'}
    //               ]
    //           },
    //           {label: 'Delete', icon:'pi pi-fw pi-trash'},
    //           {label: 'Export', icon:'pi pi-fw pi-external-link'}
    //       ]
    //   },
    //   {
    //       label: 'Edit',
    //       icon:'pi pi-fw pi-pencil',
    //       items: [
    //           {label: 'Left', icon: 'pi pi-fw pi-align-left'},
    //           {label: 'Right', icon: 'pi pi-fw pi-align-right'},
    //           {label: 'Center', icon: 'pi pi-fw pi-align-center'},
    //           {label: 'Justify', icon: 'pi pi-fw pi-align-justify'}
    //       ]
    //   },
    //   {
    //     label: 'Users',
    //     icon:'pi pi-fw pi-user',
    //     items: [
    //         {label: 'New', icon: 'pi pi-fw pi-user-plus'},
    //         {label: 'Delete', icon: 'pi pi-fw pi-user-minus'},
    //         {
    //           label: 'Search',
    //           icon:'pi pi-fw pi-users',
    //           items: [
    //             {
    //               label: 'Filter',
    //               icon:'pi pi-fw pi-filter',
    //               items: [
    //                 {label: 'Print', icon: 'pi pi-fw pi-print'}
    //               ]
    //             },
    //             {label: 'List', icon:'pi pi-fw pi-list'}
    //           ]
    //         }
    //     ]
    //   },
    //   {
    //     label: 'Events',
    //     icon:'pi pi-fw pi-calendar',
    //     items: [
    //       {
    //         label: 'Edit',
    //         icon:'pi pi-fw pi-pencil',
    //         items: [
    //           {label: 'Save', icon:'pi pi-fw pi-calendar-plus'},
    //           {label: 'Delete', icon:'pi pi-fw pi-calendar-minus'}
    //         ]
    //       },
    //       {
    //         label: 'Archieve',
    //         icon:'pi pi-fw pi-calendar-times',
    //         items: [
    //           {label: 'Remove', icon:'pi pi-fw pi-calendar-minus'}
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Quit',
    //     icon: 'pi pi-fw pi-power-off'
    //   }
    // ];
  }

}
