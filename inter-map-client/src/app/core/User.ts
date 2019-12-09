import {UserRole} from './UserRole';

export class User {
  username: string;
  token?: string;
  role?: UserRole;
}
