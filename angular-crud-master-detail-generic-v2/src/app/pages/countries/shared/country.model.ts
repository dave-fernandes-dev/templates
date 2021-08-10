import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Country extends BaseResourceModel {
  constructor(
    public id?:number,
    public name?: string,
    public code?: string
  ){
    super();
  }
  

  static fromJson(jsonData: any): Country {
    return Object.assign(new Country(), jsonData);
  }
}