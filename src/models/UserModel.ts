import { Roles } from './RolesModel';

export interface User {
  id: number;
  name: string;
  email: string;
  rol: Roles;
}