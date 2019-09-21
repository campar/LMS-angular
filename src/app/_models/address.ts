import { City } from './city';
import { BaseModel } from './base-model';

export class Address extends BaseModel {
  id: number;
  street: string;
  number: string;
  city: City;
}
