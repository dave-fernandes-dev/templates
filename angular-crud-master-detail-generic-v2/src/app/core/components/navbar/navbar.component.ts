import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visibleSidebar1: any;

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
             label:'Countries',
             icon:'pi pi-fw pi-file',
             items:[
                {
                   label:'Novo Cadastro',
                   routerLink:'/countries/new',
                   icon:'pi pi-fw pi-plus',
                },
                {
                  icon:'pi pi-fw pi-bars',
                  routerLink:'/countries',
                  label:'Listagem'

                },
                
             ]
          },

      ];
  }


}
