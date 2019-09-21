import { Role } from "./role";
import { BaseModel } from './base-model';

export class User extends BaseModel {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
  token?: string;
}
