/* tslint:disable */

declare var Object: any;
export interface TwoInterface {
  "name": string;
  "age"?: number;
  "id"?: number;
}

export class Two implements TwoInterface {
  "name": string;
  "age": number;
  "id": number;
  constructor(data?: TwoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Two`.
   */
  public static getModelName() {
    return "Two";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Two for dynamic purposes.
  **/
  public static factory(data: TwoInterface): Two{
    return new Two(data);
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
      name: 'Two',
      plural: 'Twos',
      path: 'Twos',
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
