import { OnInit, Directive } from '@angular/core';

import { BaseResourceModel } from "../../models/base-resource.model";
import { BaseResourceService } from "../../services/base-resource.service";

import {MessageService} from 'primeng/api';

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceService: BaseResourceService<T>, protected messageService: MessageService) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    
    if (mustDelete){
      this.resourceService.delete(resource.id!).subscribe(
        () => this.resources = this.actionsForSucces(resource),
        () => this.actionsForError()
      )      
    }
  }

  private actionsForSucces(resource: T): T[] {

    this.messageService.add({severity:'success', summary: 'Solicitação processada com sucesso!', detail:'Registro ' +resource.id+ ' Excluído!'});

    return this.resources.filter(element => element != resource);
  }    
  

  private actionsForError(){

    this.messageService.add({severity:'error', summary: 'Erro ao processar a sua solicitação!', detail:'Registro NÃO Excluído'});

  }



}
