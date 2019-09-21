import { Country } from './country';
import { BaseModel } from './base-model';

export class City extends BaseModel {
  id: number;
  name: string;
  country: Country;
}
