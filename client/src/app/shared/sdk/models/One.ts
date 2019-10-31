/* tslint:disable */

declare var Object: any;
export interface OneInterface {
  "name"?: string;
  "age"?: number;
  "about"?: string;
  "id"?: number;
}

export class One implements OneInterface {
  "name": string;
  "age": number;
  "about": string;
  "id": number;
  constructor(data?: OneInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `One`.
   */
  public static getModelName() {
    return "One";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of One for dynamic purposes.
  **/
  public static factory(data: OneInterface): One{
    return new One(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'One',
      plural: 'Ones',
      path: 'Ones',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "age": {
          name: 'age',
          type: 'number'
        },
        "about": {
          name: 'about',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
