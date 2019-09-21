import { BaseModel } from "./base-model";

export class Degree extends BaseModel {
  name: string;

  getName() {
    if (this.name === 'BACHELOR_DEGREE') {
      return 'Osnovne akademske studije';
    }
  }
}
