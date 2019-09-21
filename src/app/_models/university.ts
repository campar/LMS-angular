import { Faculty } from './faculty';
import { Address } from './address';
import { Professor } from './professor';
import { BaseModel } from './base-model';

export class University extends BaseModel {
  id: number;
  name: string;
  dateOfEstablishment: Date;
  phoneNumber: string;
  description: string;
  faculties: Faculty[];
  rector: Professor;
  address: Address;
}
