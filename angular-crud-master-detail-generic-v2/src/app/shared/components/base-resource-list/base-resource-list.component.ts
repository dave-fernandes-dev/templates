import { OnInit, Directive } from '@angular/core';

import { BaseResourceModel } from "../../models/base-resource.model";
import { BaseResourceService } from "../../services/base-resource.service";

import {MessageService, ConfirmationService} from 'primeng/api';

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  resourceDialog!: boolean;

  resource?: T;

  selectedResources!: T[];

  submitted!: boolean;

  constructor(private resourceService: BaseResourceService<T>, protected messageService: MessageService, protected confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => alert('Erro ao carregar a lista')
    )
  }

deleteResource(resource: T) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + resource.id + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.resourceService.delete(resource.id!).subscribe(
                () => this.actionsForSuccess(resource),
                () => this.msgError()
            )
        }
    });
}

deleteSelectedResources() {
    this.confirmationService.confirm({
        message: 'Você tem Certeza que quer Excluir Todos Estes Registros Selecionados ?',
        header: 'Confirma?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

            for (var resource of this.selectedResources){
                this.resourceService.delete(resource.id!).subscribe(
                    () => this.msgSucces(),
                    () => this.msgError()
                )
            }
            this.resources = this.resources.filter(val => !this.selectedResources.includes(val));
            this.selectedResources = [];
        }
    });
}

 actionsForSuccess(resource: T) {
    
    this.resources = this.resources.filter(val => val.id !== resource.id);
    //this.resource = {};

    this.messageService.add({severity:'success', summary: 'Solicitação processada com sucesso!', detail:'Registro ' + resource.id + ' Excluído!'});

} 

 actionsForError(){

    this.messageService.add({severity:'error', summary: 'Erro ao processar a sua solicitação!', detail:'Registro NÃO Excluído'});

  }
  
 msgSucces() {
    
    this.messageService.add({severity:'success', summary: 'Solicitação processada com sucesso!', detail:'Registro Excluído!'});

} 

 msgError(){

    this.messageService.add({severity:'error', summary: 'Erro ao processar a sua solicitação!', detail:'Registro NÃO Excluído'});

  }


}
