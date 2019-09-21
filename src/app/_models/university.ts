import { Faculty } from './faculty';
import { Address } from './address';
import { Professor } from './professor';

export class University {
  id: number;
	name: string;
	dateOfEstablishment: Date;
	phoneNumber: string;
  description: string;
  faculties: Faculty[];
  rector: Professor;
  address: Address;
}
